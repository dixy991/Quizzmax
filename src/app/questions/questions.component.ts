import { Component, OnInit } from '@angular/core';
import { QuizzesService } from '../services/quizzes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Quizz } from '../quizz';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  quizId: number = 0
  quizzes: Quizz[] = []
  quizz: Quizz

  isFinished: boolean = false
  correctAnswers: number = 0

  constructor(private service: QuizzesService, private http: HttpClient, private route: ActivatedRoute) {

    this.route.params.subscribe((params: Params) => {

      if (this.route.snapshot.params.id) {

        this.quizId = this.route.snapshot.params["id"]

      }

    })
  }

  ngOnInit(): void {
    this.service.getAllQuizzes().subscribe(
      (data: Quizz[]) => {
        this.quizzes = data
        for (let i = 0; i < this.quizzes.length; i++) {
          if (this.quizzes[i].id == this.quizId) {
            this.quizz = this.quizzes[i]
            break;
          }
        }

      },
      error => {
        alert("Sorry, there has been a problem." + error.statusText)
      }
    )
  }

  prikazRezultata(rezultat: any) {
    this.isFinished = rezultat.isFinished
    this.correctAnswers = rezultat.correctAnswers
    console.log(rezultat)
  }


}
