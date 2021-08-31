import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpservice: HttpClient) { }

  getCategories() {
    return this.httpservice.get("http://localhost:4200/assets/data/categories.json");
  }
}
