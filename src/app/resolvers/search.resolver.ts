import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RestApiService } from '../service/RestApi.service';
import { Movie } from '../_models/movie';

@Injectable()
export class SearchResolver implements Resolve<Movie[]> {

  constructor(private rs: RestApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {

    return this.rs.getSearch(route.params['search'],route.params['type']).pipe(
      catchError((error) => {
        console.log(error);

        return of(null);
      })
    );
  }
}
