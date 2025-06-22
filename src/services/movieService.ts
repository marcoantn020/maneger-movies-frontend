import api from './api';
import type {Movie, MovieSave, PaginatedResponse} from "./interfaces.ts";

export const movieService = {
    async getMovies(page = 1, search: string): Promise<PaginatedResponse> {
        const response = await api.get('/movies', {
            params: { page, search }
        });
        return response.data;
    },

    async getMovieById(id: string): Promise<Movie | null> {
        const response = await api.get(`/movies/${id}`);
        return response.data.data;
    },

    async saveMovie(movieData: MovieSave): Promise<Movie> {
        const response = await api.post('/movies', movieData);
        return response.data;
    },

    async updateMovie(movieData: MovieSave, id: string): Promise<Movie> {
        const response = await api.put(`/movies/${id}`, movieData);
        return response.data;
    },

    async deleteMovieById(id: string): Promise<Movie> {
        const response = await api.delete(`/movies/${id}`);
        return response.data.data;
    },

};