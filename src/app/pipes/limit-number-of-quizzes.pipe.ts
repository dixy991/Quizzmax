import { Pipe, PipeTransform } from '@angular/core';
import { Quizz } from '../quizz';

@Pipe({
  name: 'limitNumberOfQuizzes'
})
export class LimitNumberOfQuizzesPipe implements PipeTransform {

  transform(quizzes: Quizz[], limit: number): Quizz[] {
    return quizzes.slice(0, limit)
  }

}
