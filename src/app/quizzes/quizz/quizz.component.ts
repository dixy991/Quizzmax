import { Component, OnInit, Input } from '@angular/core';
import { flyIn } from 'src/app/animations';
import { Quizz } from 'src/app/quizz';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
  animations: [
    flyIn
  ]
})
export class QuizzComponent implements OnInit {

  @Input() quiz: Quizz

  constructor() { }

  ngOnInit(): void {
  }


}
