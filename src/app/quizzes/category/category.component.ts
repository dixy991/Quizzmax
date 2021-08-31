import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizzesService } from '../../services/quizzes.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import { Quizz } from 'src/app/quizz';
import { zoom } from 'src/app/animations';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    zoom
  ]
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories: Category[] = []
  categoryId: number = 0
  categoryName: string = ""

  quizzes: Quizz[] = []
  quizzesOfcat: Quizz[] = []

  paramsSubscription: Subscription

  constructor(private quizzService: QuizzesService, private categoryService: CategoriesService, private http: HttpClient, private route: ActivatedRoute) {

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {

      if (this.route.snapshot.params.id) {

        this.categoryId = this.route.snapshot.params["id"]

      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    //kvizovi
    this.quizzService.getAllQuizzes().subscribe(
      (Response: Quizz[]) => {
        this.quizzes = Response;
        for (let i = 0; i < this.quizzes.length; i++) {
          if (this.quizzes[i].category == this.categoryId) {
            this.quizzesOfcat.push(this.quizzes[i])
          }
        }
        console.log(this.quizzesOfcat)
      },
      error => {
        alert("Sorry, there has been a problem. " + error.statusText)
        console.log(error)
      }
    )
    //naziv kategorije
    this.categoryService.getCategories().subscribe(
      (Response: Category[]) => {
        this.categories = Response;
        for (let index = 0; index < this.categories.length; index++) {
          if (this.categories[index].id == this.categoryId) {
            this.categoryName = this.categories[index].name;
            break;
          }
        }
      },
      error => {
        alert("Sorry, there has been a problem. " + error.statusText)
        console.log(error)
      }
    )
  }

}
