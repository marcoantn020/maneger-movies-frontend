export interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
    synopsis: string;
    poster_url: string | null;
}

export interface MovieApi {
    id: number;
    title: string;
    overview: string;
    genres: { name: string }[];
    release_date: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export interface MovieSave {
    title: string;
    year: number;
    genre: string;
    synopsis: string;
    poster_url: string | null;
}

interface Links {
    url: string | null,
    label: string,
    active: boolean
}

export interface PaginatedResponse {
    data: Movie[];
    links: {
        first: string | null;
        last: string | null;
        prev: string | null;
        next: string | null;
    };
    "meta": {
        "current_page": number,
        "from": number,
        "last_page": number,
        "links": Links[],
        "path": string,
        "per_page": number,
        "to": number,
        "total": number
    }
}

export interface User {
    full_name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    photo: string;
    created_at: string;
    updated_at: string;
}