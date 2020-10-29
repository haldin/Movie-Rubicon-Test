import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../_models/movie';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TVShowsComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  timeOut = null;
  dataS: any;
  searchOther=this.activatedRoute.snapshot.params['search'];
  type = 'tv';
  shows: Movie[];
  showsS: Movie[];
  topShows = [];
  isSearch = false;
  imageUrl = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/';

  ngOnInit(): void {
    this.dataS=this.activatedRoute.snapshot.params['search'];
    this.activatedRoute.data.subscribe((data) => {
      this.shows = data['shows'];
      if (this.shows == undefined) {
        this.isSearch = true;
        this.shows = data['search'].result.results;
      }
      console.log(this.shows);
      this.topShows = this.shows['results'];
    });
    this.returnIfUndefined();
  }
  returnIfUndefined(){
    if(this.searchOther=='undefined')
    this.router.navigate(['/tv-shows']);
  }

  search(dataS: string) {
    this.searchOther = dataS;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      if (dataS.length >= 3) {

        this.router.navigate(['tv-shows/' + dataS + '/' + this.type]);
      } else {
        this.router.navigate(['/tv-shows']);
      }
    }, 1000);
  }
}
