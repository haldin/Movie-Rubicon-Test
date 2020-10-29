import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { TVShowsComponent } from './tv-shows/tv-shows.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MovieResolver } from './resolvers/movie.resolver';
import { ShowsResolver } from './resolvers/shows.resolver';
import { MovieDetailResolver } from './resolvers/movie-detail.resolver';
import { ShowDetailResolver } from './resolvers/show-detail.resolver';
import { ShowVideoResolver } from './resolvers/show-video.resolver';
import { SearchResolver } from './resolvers/search.resolver';
import { MenuComponent } from './menu/menu/menu.component';
import { SearchMovieResolver } from './resolvers/search-movie.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TVShowsComponent,
    MovieDetailComponent,
    TvShowDetailComponent,

    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    MovieResolver,
    ShowsResolver,
    MovieDetailResolver,
    ShowDetailResolver,
    ShowVideoResolver,
    SearchResolver,
    SearchMovieResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
