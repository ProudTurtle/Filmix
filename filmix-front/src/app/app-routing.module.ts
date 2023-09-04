import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GenreComponent} from "./genre/genre.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {TopMoviesComponent} from "./top-movies/top-movies.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'movie/:id', component: MovieDetailComponent},
  { path: 'top-movies', component: TopMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
