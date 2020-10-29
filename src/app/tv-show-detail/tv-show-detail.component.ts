import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Movie,} from '../_models/movie';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css'],
})
export class TvShowDetailComponent implements OnInit {
  safeUrl: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  show: Movie;
  imageUrl = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  videoBaseUrl = 'https://www.youtube.com/embed/';
  videoKey: string;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.show = data['shows'];
      this.videoKey = data['video'].results[0].key;
    });

    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoBaseUrl + this.videoKey
    );
    console.log(this.show);
  }
  backButton() {
    window.history.back();
  }
}
