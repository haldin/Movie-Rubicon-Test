import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolver } from './resolvers/movie.resolver';
import { MovieComponent } from './movie/movie.component';
import { TVShowsComponent } from './tv-shows/tv-shows.component';
import { ShowsResolver } from './resolvers/shows.resolver';
import { MovieDetailResolver } from './resolvers/movie-detail.resolver';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { ShowDetailResolver } from './resolvers/show-detail.resolver';
import { ShowVideoResolver } from './resolvers/show-video.resolver';
import { SearchResolver } from './resolvers/search.resolver';
import { SearchMovieResolver } from './resolvers/search-movie.resolver';
export const appRoutes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: TVShowsComponent,
        resolve: { shows: ShowsResolver },
      },
      {
        path: 'tv-shows',
        component: TVShowsComponent,
        resolve: { shows: ShowsResolver },
      },
      {
        path: 'tv-shows/:search/:type',
        component: TVShowsComponent,
        resolve: { search: SearchResolver },
      },
      {
        path: 'tv-show/:id1/:id2',
        component: TvShowDetailComponent,
        resolve: { shows: ShowDetailResolver, video: ShowVideoResolver },
      },
      {
        path: 'movie',
        component: MovieComponent,
        resolve: { movies: MovieResolver },
      },
      {
        path: 'movies/:search/:type',
        component: MovieComponent,
        resolve: { search: SearchMovieResolver },

      },
      {
        path: 'movie/:id1/:id2',
        component: MovieDetailComponent,
        resolve: { movies: MovieDetailResolver, video: ShowVideoResolver },
      },

    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
