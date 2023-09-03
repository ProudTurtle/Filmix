import {Component, OnInit} from '@angular/core';
import {Category} from "../models/category";
import {CategoryService} from "../models/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MovieService} from "../models/movie.service";
import {Movie} from "../models/movie";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
})
export class GenreComponent implements OnInit{
  public movies: Movie[];
  public categories: Category[];
  public activeCategory: Category | null | undefined;

  constructor(private categoryService: CategoryService, private movieService: MovieService) {
    this.categories = [];
    this.movies =[];
  }

  ngOnInit() {
    this.getCategories();
  }

  public setActiveCategory(category: Category): void {
    this.activeCategory = category;
    if(this.activeCategory){
      this.getMoviesByCategory(this.activeCategory.id);
    }
  }
  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response:Category[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMoviesByCategory(id: number): void {
    this.movieService.getMoviesByTitle(id).subscribe(
      (response:Movie[]) => {
        this.movies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public formatDuration(duration: number): string {
    const hours = Math.floor(duration/60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}min`
  }

}
