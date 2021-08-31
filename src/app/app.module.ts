import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryQuizzesComponent } from '././quizzes/category-quizzes/category-quizzes.component';
import { QuizzComponent } from './quizzes/quizz/quizz.component';
import { CategoryComponent } from './quizzes/category/category.component';
import { QuestionsComponent } from './questions/questions.component';
import { BackgroundColorDirective } from './background-color.directive';
import { AnswersComponent } from './questions/answers/answers.component';
import { ResultComponent } from './questions/result/result.component';
import { FooterComponent } from './footer/footer.component';
import { FilterByActivityPipe } from './pipes/filter-by-activity.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { QuizzesService } from './services/quizzes.service';
import { CategoriesService } from './services/categories.service';
import { LimitNumberOfQuizzesPipe } from './pipes/limit-number-of-quizzes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuizzesComponent,
    NavigationComponent,
    CategoryQuizzesComponent,
    QuizzComponent,
    CategoryComponent,
    QuestionsComponent,
    BackgroundColorDirective,
    AnswersComponent,
    ResultComponent,
    FooterComponent,
    FilterByActivityPipe,
    NotFoundComponent,
    LimitNumberOfQuizzesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, QuizzesService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
