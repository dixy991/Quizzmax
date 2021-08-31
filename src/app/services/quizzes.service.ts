import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private httpservice: HttpClient) { }

  getAllQuizzes() {
    return this.httpservice.get("http://localhost:4200/assets/data/quizzes.json");
  }

}
