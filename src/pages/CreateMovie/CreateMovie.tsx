import {Group, Wrapper} from "./styles.ts";
import {TitleLg} from "../../components/Typograph";
import {Input} from "../../components/Input/Input.tsx";
import {CalendarBlank, FilmSlate, Tag} from "phosphor-react";
import {Button} from "../../components/Button/Button.tsx";
import {useEffect, useState} from "react";
import {TextArea} from "../../components/TextArea/TextArea.tsx";
import {ImagePicker} from "../../components/ImagePicker/ImagePicker.tsx";
import {useTheme} from "styled-components";
import {NavButton} from "../../components/NavButton/styles.ts";
import {movieService} from "../../services/movieService.ts";
import {useNavigate} from "react-router-dom";
import {Select} from "../../components/Select/Select.tsx";
import {Options} from "../constants.ts";

interface FormErrors {
    title?: string[];
    year?: string[];
    genre?: string[];
    synopsis?: string[];
    poster_url?: string[];
}

export function CreateMovie() {
    const theme = useTheme();
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [posterUrl, setPosterUrl] = useState<string | undefined>();
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        setIsLoading(true);
        setErrors({});

        try {
            const movieData = {
                title,
                year: Number(year),
                genre,
                synopsis,
                poster_url: posterUrl ?? null,
            };

            await movieService.saveMovie(movieData);
            navigate('/adm/my-movies')
        } catch (error: any) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const getError = (field: keyof FormErrors): string => {
        return errors[field]?.[0] || "";
    };

    useEffect(() => {
        if ((!errors || Object.keys(errors).length === 0)) return;

        const timer = setTimeout(() => {
            setErrors({})
        }, 5000);

        return () => clearTimeout(timer);
    }, [errors]);


    return (
        <Wrapper>
            <main>
                <ImagePicker
                    value={posterUrl}
                    onChange={setPosterUrl}
                />
            </main>

            <aside>
                <TitleLg>Novo Filme</TitleLg>

                <section>
                    <Input
                        placeholder="Título"
                        icon={<FilmSlate />}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        error={getError("title")}
                    />

                    <Group>
                        <Input
                            placeholder="Ano"
                            icon={<CalendarBlank />}
                            value={year}
                            onChange={(e) => setYear(e.target.value.replace(/\D/g, ""))}
                            error={getError("year")}
                            maxLength={4}
                        />

                        <Select
                            icon={<Tag />}
                            options={Options}
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            error={getError("genre")}
                        />
                    </Group>

                    <TextArea
                        placeholder="Sinopse"
                        value={synopsis}
                        onChange={(e) => setSynopsis(e.target.value)}
                        error={getError("synopsis")}
                    />
                </section>

                <div className="action">
                    <div>
                        <NavButton
                            to="/adm/my-movies"
                            style={{ background: theme["gray-200"] }}
                        >
                            Cancelar
                        </NavButton>
                        <Button onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? "Salvando..." : "Salvar"}
                        </Button>
                    </div>
                </div>
            </aside>
        </Wrapper>
    );
}