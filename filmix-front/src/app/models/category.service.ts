import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiServerUrl}/api/categories`)
  }
}
