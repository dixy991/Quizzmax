import { Quizz } from 'src/app/quizz';
import { Category } from './../../category';
import { Component, OnInit, Input } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { flyIn, zoom } from '../../animations';

@Component({
  selector: 'app-category-quizzes',
  templateUrl: './category-quizzes.component.html',
  styleUrls: ['./category-quizzes.component.css'],
  animations: [
    flyIn,
    zoom
  ]
})
export class CategoryQuizzesComponent implements OnInit {

  catquiz = []
  categories: Category[] = []
  quizzes: Quizz[] = []

  constructor(private quizzService: QuizzesService, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    //kvizovi
    this.quizzService.getAllQuizzes().subscribe(
      (Response: Quizz[]) => {
        this.quizzes = Response;
      },
      error => {
        alert("Sorry, there has been a problem. " + error.statusText)
        console.log(error)
      }
    )
    //kategorije
    this.categoryService.getCategories().subscribe(
      (Response: Category[]) => {
        this.categories = Response;
        for (let i = 0; i < this.categories.length; i++) {
          this.catquiz.push({ category: this.categories[i], quizzes: [] })
          for (let j = 0; j < this.quizzes.length; j++) {
            if (this.quizzes[j].category == this.categories[i].id) {
              this.catquiz[i].quizzes.push(this.quizzes[j])
            }
          }
        }
        console.log(this.catquiz)
      },
      error => {
        alert("Sorry, there has been a problem. " + error.statusText)
        console.log(error)
      }
    )

  }


}
