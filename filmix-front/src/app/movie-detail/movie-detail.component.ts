import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../models/movie.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie | undefined;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getMovieById(parseInt(id, 10));
    }
  }

  public getMovieById(id: number): void {
    this.movieService.getMovieById(id).subscribe(
      (response: Movie) => {
        console.log(response);
        this.movie = response;
        this.movie.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }


}
