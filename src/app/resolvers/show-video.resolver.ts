import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RestApiService } from '../service/RestApi.service';
import { TvShowService } from '../service/tv-show.service';
import { Movie } from '../_models/movie';

@Injectable()
export class ShowVideoResolver implements Resolve<Movie[]> {
  constructor(private tvService: TvShowService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {

      return this.tvService.getShowVideo(route.params['id1'],route.params['id2']).pipe(
        catchError((error) => {
          console.log(error);
          this.router.navigate(['']);
          return of(null);
        })
      )

  }
}
