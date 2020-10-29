export interface Movie {
    id: number;
    video: boolean;
    vote_count: number;
    vote_average: number;
    title: string;
    name: string;
    release_date: Date;
    original_language: string;
    original_title: string;
    adult: boolean;
    overview: string;
    poster_path: string;
    backdrop_path:string
}

export class Result<T> {
  result: T;
  movie: Movie;
}
