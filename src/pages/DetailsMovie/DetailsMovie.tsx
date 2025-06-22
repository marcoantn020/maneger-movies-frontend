import {useEffect, useState} from 'react';
import {Back, Content, Meta, Poster, Synopsis, Wrapper} from "./styles.ts";
import {ArrowLeft} from "phosphor-react";
import {ErrorMessage, TitleHg} from "../../components/Typograph";
import {useTheme} from "styled-components";
import {useNavigate, useParams} from 'react-router-dom';
import {movieService} from '../../services/movieService';
import {LoadingSpinner} from "../../components/LoadingSpnner/LoadingSpinner.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {NavButton} from "../../components/NavButton/styles.ts";
import {DeleteConfirmationModal} from "./components/DeleteConfirmationModal.tsx";

import NoImage from "../../assets/placeholder-movie.jpg"
import type {Movie, MovieApi} from "../../services/interfaces.ts";

const API_KEY = import.meta.env.VITE_KEY_TMDB;
const URL_IMAGE = import.meta.env.VITE_URL_IMAGE;

export function DetailsMovie() {
    const theme = useTheme();
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const isNumericId = id && /^\d+$/.test(id);

    const transformMovieFromApi = (movieApi: MovieApi): Movie => ({
        id: String(movieApi.id),
        title: movieApi.title,
        year: new Date(movieApi.release_date).getFullYear(),
        genre: movieApi.genres?.[0]?.name || 'Desconhecido',
        synopsis: movieApi.overview || 'Sinopse não disponível',
        poster_url: movieApi.backdrop_path
            ? `${URL_IMAGE}${movieApi.backdrop_path}`
            : movieApi.poster_path
                ? `${URL_IMAGE}${movieApi.poster_path}`
                : NoImage
    });

    async function fetchFromTMDB(movieId: string) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
            );
            if (!response.ok) throw new Error('Filme não encontrado na TMDB');
            const data: MovieApi = await response.json();
            return transformMovieFromApi(data);
        } catch (error) {
            console.error('Erro ao buscar filme na TMDB:', error);
            return null;
        }
    }

    async function fetchMyApi(movieId: string) {
        try {
            return await movieService.getMovieById(movieId);
        } catch (error) {
            console.error('Erro ao buscar filme local:', error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchMovie() {
            try {
                setLoading(true);
                if (!id) throw new Error('ID do filme não encontrado');

                let movieData: Movie | null;

                if (isNumericId) {
                    movieData = await fetchFromTMDB(id);
                } else {
                    movieData = await fetchMyApi(id);
                }

                setMovie(movieData || null);
            } catch (error) {
                console.error('Erro ao carregar filme:', error);
                setMovie(null);
            } finally {
                setLoading(false);
            }
        }

        fetchMovie();
    }, [id]);

    async function handleDelete() {
        if (!movie || isNumericId) return;

        try {
            await movieService.deleteMovieById(movie.id);
            navigate('/adm/my-movies');
        } catch (error) {
            console.error('Erro ao deletar filme:', error);
        } finally {
            setIsDeleteModalOpen(false);
        }
    }

    if (loading) return <LoadingSpinner/>;

    if (!movie) {
        return (
            <Wrapper style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <ErrorMessage style={{fontSize: '1.5rem'}}>Filme não encontrado</ErrorMessage>
                <NavButton style={{width: '10rem'}} to='/adm'>Voltar</NavButton>
            </Wrapper>
        );
    }

    return (
        <>
            <Wrapper>
                <Poster
                    src={movie.poster_url ?? ''}
                    alt={`Pôster de ${movie.title}`}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = NoImage;
                    }}
                />

                <Content>
                    <section>
                        <Back onClick={() => navigate('/adm/my-movies')}>
                            <ArrowLeft
                                size={18}
                                weight="bold"
                                color={theme['gray-500']}
                            /> Voltar
                        </Back>

                        <TitleHg>
                            {movie.title}
                        </TitleHg>

                        <Meta>
                            <span>Categoria:</span> {movie.genre} <br/>
                            <span>Ano:</span> {movie.year}
                        </Meta>

                        <Synopsis>
                            {movie.synopsis}
                        </Synopsis>
                    </section>

                    {!isNumericId && (
                        <div className="action">
                            <div className='buttonDelete'>
                                <Button
                                    onClick={() => setIsDeleteModalOpen(true)}
                                >
                                    Deletar
                                </Button>
                            </div>
                            <NavButton to={`/adm/edit/${movie.id}`}>Editar</NavButton>
                        </div>
                    )}
                </Content>
            </Wrapper>

            {!isNumericId && (
                <DeleteConfirmationModal
                    isOpen={isDeleteModalOpen}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleDelete}
                    movieTitle={movie.title}
                />
            )}
        </>
    );
}