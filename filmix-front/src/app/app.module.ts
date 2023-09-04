import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { BannerComponent } from './banner/banner.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { StarsComponent } from './stars/stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopMoviesComponent } from './top-movies/top-movies.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenreComponent,
    BannerComponent,
    HeadComponent,
    FooterComponent,
    MovieDetailComponent,
    StarsComponent,
    TopMoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
