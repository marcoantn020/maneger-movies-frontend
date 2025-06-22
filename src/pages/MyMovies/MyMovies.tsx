import {Content, Header, ListCards, Wrapper} from "./styles.ts";
import {DisplayXl} from "../../components/Typograph";
import {Input} from "../../components/Input/Input.tsx";
import {FilmSlate, MagnifyingGlass, Plus} from "phosphor-react";
import React, {useEffect, useState} from "react";
import {useTheme} from "styled-components";
import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import {movieService} from "../../services/movieService.ts";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {NavButton} from "../../components/NavButton/styles.ts";
import type {Movie, PaginatedResponse} from "../../services/interfaces.ts";
import {LoadingSpinner} from "../../components/LoadingSpnner/LoadingSpinner.tsx";

export function MyMovies() {
    const [search, setSearch] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState<PaginatedResponse>({} as PaginatedResponse);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)

    const theme = useTheme();

    async function handleMovies() {
        try {
            setLoading(true)
            const movies = await movieService.getMovies(page, search);
            setData(movies);
        } catch (error) {
            setData({} as PaginatedResponse);
        } finally {
            setLoading(false)
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setPage(1);
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            setSearch(inputValue);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [inputValue]);

    useEffect(() => {
        handleMovies();
    }, [page, search]);

    if (loading) return <LoadingSpinner />

    return (
        <Wrapper>
            <Header>
                <main>
                    <DisplayXl>
                        Meus Filmes
                    </DisplayXl>
                </main>

                <aside>
                    <section>
                        <Input
                            placeholder='Pesquisar Filme'
                            icon={<MagnifyingGlass/>}
                            value={inputValue}
                            onChange={handleSearchChange}
                        />

                        <div className="button">
                            <NavButton
                                to='/adm/new'
                                $hasIcon={true}
                            >
                                <Plus />
                                Novo
                            </NavButton>
                        </div>
                    </section>
                </aside>
            </Header>

            <Content>
                {data.data?.length > 0 ? (
                    <>
                        <ListCards>
                            {data.data.map((movie: Movie) => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))}
                        </ListCards>

                        {data.meta && (
                            <Pagination
                                currentPage={data.meta.current_page}
                                totalPages={data.meta.last_page}
                                onPageChange={(page) => setPage(page)}
                            />
                        )}
                    </>
                ) : (
                    <section className="empty-state">
                        <FilmSlate
                            color={theme["gray-400"]}
                            size={44}
                        />
                        <p>Nenhum filme registrado.<br/>
                            Que tal começar cadastrando seu primeiro filme?</p>
                    </section>
                )}
            </Content>
        </Wrapper>
    );
}