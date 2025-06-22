import {Container, Content, Header, ListCards, Wrapper} from "./styles.ts";
import {DisplayXl, ErrorMessage} from "../../components/Typograph";
import {Input} from "../../components/Input/Input.tsx";
import {FilmSlate, MagnifyingGlass} from "phosphor-react";
import {useTheme} from "styled-components";
import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {useMovies} from "../../hooks/useMovies.ts";

export function Explore() {
    const theme = useTheme();
    const API_KEY = import.meta.env.VITE_KEY_TMDB;
    const URL_IMAGE = import.meta.env.VITE_URL_IMAGE;

    const {
        search,
        setSearch,
        movies,
        setPage,
        hasMore,
        isLoading,
        error,
        loadMovies,
    } = useMovies(API_KEY, URL_IMAGE);

    return (
        <Wrapper>
            <Header>
                <main>
                    <DisplayXl>Explorar</DisplayXl>
                </main>

                <aside>
                    <Input
                        placeholder='Pesquisar filmes'
                        icon={<MagnifyingGlass/>}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && loadMovies()}
                    />
                </aside>
            </Header>

            <Container>
                <Content>
                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    {movies.length > 0 ? (
                        <>
                            <ListCards>
                                {movies.map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                            </ListCards>

                            {hasMore && (
                                <Button
                                    style={{ marginTop: '1.5rem' }}
                                    onClick={() => setPage(p => p + 1)}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Carregando...' : 'Carregar mais'}
                                </Button>
                            )}
                        </>
                    ) : (
                        <section className="empty-state">
                            <FilmSlate color={theme["gray-400"]} size={44} />
                            <p>{isLoading ? 'Carregando...' : 'Nenhum filme encontrado'}</p>
                        </section>
                    )}
                </Content>
            </Container>
        </Wrapper>
    );
}