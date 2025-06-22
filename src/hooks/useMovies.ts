import { useState, useEffect, useCallback } from 'react';
import type {Movie, MovieApi} from "../services/interfaces.ts";

export function useMovies(apiKey: string, imageUrl: string) {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const transformMovie = useCallback((m: MovieApi): Movie => ({
        id: String(m.id),
        title: m.title,
        genre: '',
        synopsis: m.overview,
        year: Number(m.release_date?.split("-")[0] ?? 0),
        poster_url: m.backdrop_path
            ? `${imageUrl}${m.backdrop_path}`
            : m.poster_path
                ? `${imageUrl}${m.poster_path}`
                : null,
    }), [imageUrl]);

    const fetchMovies = useCallback(async (url: string, isNewSearch: boolean) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro: ${response.status}`);
            const json = await response.json();

            const transformedMovies = json.results.map(transformMovie);

            if (isNewSearch || page === 1) {
                setMovies(transformedMovies);
            } else {
                setMovies(prev => [...prev, ...transformedMovies]);
            }

            setHasMore(page < json.total_pages && page < 500);
        } catch (err) {
            setError('Falha ao carregar filmes');
            setHasMore(false);
        } finally {
            setIsLoading(false);
        }
    }, [page, transformMovie]);

    const loadMovies = useCallback(async () => {
        const url = search.length > 1
            ? `https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&page=${page}&api_key=${apiKey}`
            : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=pt-BR&page=${page}&api_key=${apiKey}`;

        await fetchMovies(url, search.length > 1);
    }, [search, page, apiKey, fetchMovies]);

    const resetSearch = useCallback(() => {
        setSearch('');
        setPage(1);
    }, []);

    useEffect(() => {
        loadMovies();
    }, [page, loadMovies]);

    return {
        search,
        setSearch,
        movies,
        page,
        setPage,
        hasMore,
        isLoading,
        error,
        loadMovies,
        resetSearch,
    };
}