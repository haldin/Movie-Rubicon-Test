import { Component, OnInit } from '@angular/core';
import { Movie } from '../_models/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  timeOut = null;
  dataS: any;
  searchOther = this.activatedRoute.snapshot.params['search'];
  type = 'movie';
  movies: Movie[];
  filmovi = [];
  isSearch = false;
  imageUrl = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/';

  ngOnInit(): void {
    this.dataS=this.activatedRoute.snapshot.params['search'];
    this.activatedRoute.data.subscribe((data) => {
      this.movies = data['movies'];
      if (this.movies == undefined) {
        this.isSearch = true;
        this.movies = data['search'].result.results;
      }
      this.filmovi = this.movies['results'];

    });
    this.returnIfUndefined();
  }

  returnIfUndefined() {
    if (this.searchOther == 'undefined') this.router.navigate(['/movie']);
  }

  search(dataS: string) {
    this.searchOther = dataS;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      if (dataS.length >= 3) {
        this.router.navigate(['movies/' + dataS + '/' + this.type]);
      } else {
        this.router.navigate(['/movies']);
      }
    }, 1000);
  }
}
