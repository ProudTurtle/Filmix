import {SafeResourceUrl} from "@angular/platform-browser";
import {GenreComponent} from "../genre/genre.component";
import {Category} from "./category";

export interface Movie{
  id: number;
  title: string;
  releaseDate: Date;
  duration: number;
  description: string;
  shortDescription: string;
  url: string;
  safeUrl: SafeResourceUrl | null
  category: Category;
  originalTitle: string;
  rate: number | null;
  rateCount: number | null;
}
