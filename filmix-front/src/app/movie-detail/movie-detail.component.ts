import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../models/movie.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {faStar, IconDefinition} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie | undefined;
  hoveredIndex = -1;
  stars = [0, 1, 2, 3, 4];
  @Input() starIcon: IconDefinition;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.starIcon = faStar;
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
