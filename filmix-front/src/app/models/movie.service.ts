import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Movie} from "./movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getMoviesByTitle(id: number): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiServerUrl}/api/movies/byCategory?category=${id}`);

  }

  public getRecommendedMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiServerUrl}/api/movies/recommended`);
  }

  public getMovieById(id: number): Observable<Movie>{
    return this.http.get<Movie>(`${this.apiServerUrl}/api/movies/${id}`);
  }

}