import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../models/movie.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  public recommendedMovies: Movie[];
  public upcomingMovies: Movie[];




  constructor(private movieService: MovieService) {
    this.recommendedMovies = [];
    this.upcomingMovies = [];

  }

  ngOnInit(): void {
    this.getRecommendedMovie()
    this.getUpcommingMovies();
  }

  public getRecommendedMovie(): void {
    this.movieService.getRecommendedMovies().subscribe(
      (response:Movie[]) => {
        this.recommendedMovies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public getUpcommingMovies(): void{
    this.movieService.getUpcomingMovies().subscribe(
      (response:Movie[]) => {
        this.upcomingMovies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }


}
