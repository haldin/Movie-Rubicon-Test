import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieDetails(id, type: string) {
    return this.http.get<Movie[]>(
      'https://api.themoviedb.org/3/' +
        type +
        '/' +
        id +
        '?language=en-US&api_key=6f3f9ff7206f820beb14dcf5780b4454'
    );
  }
  getMoviesTopRated() {
    return this.http.get<Movie[]>(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=6f3f9ff7206f820beb14dcf5780b4454&language=en-US&page=1'
    );
  }
  getMovieVideo(id) {
    return this.http.get<Movie[]>(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '/videos?api_key=6f3f9ff7206f820beb14dcf5780b4454&language=en-US'
    );
  }
}
