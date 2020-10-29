import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TvShowService } from '../service/tv-show.service';
import { Movie } from '../_models/movie';

@Injectable()
export class ShowsResolver implements Resolve<Movie[]> {
  constructor(private tvService: TvShowService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
    return this.tvService.getShowsTopRated().pipe(
      catchError((error) => {
        console.log(error);
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
