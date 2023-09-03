import {Component, OnInit} from '@angular/core';
import {Category} from "./models/category";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryService} from "./models/category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit{
  title = 'filmix-front';

  ngOnInit(): void {
  }

}
