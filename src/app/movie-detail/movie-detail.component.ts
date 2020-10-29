import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../_models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  safeUrl: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  movie: Movie;
  imageUrl = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  videoBaseUrl = 'https://www.youtube.com/embed/';
  videoKey: string;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.movie = data['movies'];
      this.videoKey = data['video'].results[0].key;
    });
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoBaseUrl + this.videoKey
    );
  }
  backButton() {
    window.history.back();
  }
}
