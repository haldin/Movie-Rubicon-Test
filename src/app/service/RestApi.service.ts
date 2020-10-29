import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie, Result } from '../_models/movie';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  searchUrlBase =
    'https://api.themoviedb.org/3/search/';
 // baseUrl: string = environment.apiUrl;
 apiKey = '6f3f9ff7206f820beb14dcf5780b4454';

  constructor(private http: HttpClient) {}

  getSearch(
    searchString: string = '',type:string
  ): Observable<Result<Movie[]>> {
    const result: Result<Movie[]> = new Result<Movie[]>();
    const params = {
      query: searchString.toString(),
      api_key : this.apiKey.toString()
    };

    return this.http
      .get<Movie[]>(this.searchUrlBase+type+'?', { observe: 'response', params })
      .pipe(
        map((response) => {
          result.result = response.body;
          if (response.headers.get('results') != null) {
            result.movie = JSON.parse(response.headers.get('results'));
          }
          return result;
        })
      );
  }
}
