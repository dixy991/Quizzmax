import { Pipe, PipeTransform } from '@angular/core';
import { Quizz } from '../quizz';

@Pipe({
  name: 'filterByActivity'
})
export class FilterByActivityPipe implements PipeTransform {

  transform(quizzes: Quizz[]): Quizz[] {
    return quizzes.filter(q => q.active);
  }

}
