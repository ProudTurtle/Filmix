import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../models/movie.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  public movies: Movie[];



  constructor(private movieService: MovieService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.getRecommendedMovie()
  }

  public getRecommendedMovie(): void {
    this.movieService.getRecommendedMovies().subscribe(
      (response:Movie[]) => {
        this.movies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }


}
