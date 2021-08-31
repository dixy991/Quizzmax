import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CategoryComponent } from './quizzes/category/category.component';
import { QuestionsComponent } from './questions/questions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryQuizzesComponent } from './quizzes/category-quizzes/category-quizzes.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "quizzes",
    canActivate: [AuthGuard],
    component: QuizzesComponent,
    children: [
      {
        path: ":id",
        component: CategoryComponent
      },
      {
        path: "",
        component: CategoryQuizzesComponent
      },
    ]
  },
  {
    path: "quizz/:id",
    canActivate: [AuthGuard],
    component: QuestionsComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
