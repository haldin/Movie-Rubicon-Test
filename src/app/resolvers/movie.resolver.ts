import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieService } from '../service/movie.service';
import { RestApiService } from '../service/RestApi.service';
import { Movie } from '../_models/movie';

@Injectable()
export class MovieResolver implements Resolve<Movie[]> {
  constructor(private movieService:MovieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
    return this.movieService.getMoviesTopRated().pipe(
      catchError((error) => {
        console.log(error);
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
