import {Card, Gradient, Info, Meta, Poster, TitleLink} from "./styles.ts";
import type {Movie} from "../../services/interfaces.ts";
import NoImage from "../../assets/placeholder-movie.jpg";

interface MovieCardProps {
    movie: Movie
}

export function MovieCard({movie}: MovieCardProps) {
    return (
        <Card>
            <Poster
                src={movie.poster_url ?? ''}
                alt={movie.title}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = NoImage;
                }}
            />

            <Gradient/>

            <Info>
                <TitleLink to={`/adm/details/${movie.id}`}>{movie.title}</TitleLink>
                <Meta>
                    {movie.genre} • {movie.year}
                </Meta>
            </Info>
        </Card>
    );
}