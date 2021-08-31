import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { rotate, blinking } from 'src/app/animations';
import { Quizz } from 'src/app/quizz';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
  animations: [
    rotate,
    blinking
  ]
})
export class AnswersComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  @Input() quizz: Quizz

  blinkingState: string = "visible"

  currentQuestion: number = 0
  correctAnswers: number = 0

  timer: any
  seconds: number = 0
  progress: number = 0

  isFinished: boolean = false
  isDisabled: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.seconds++
      this.blinkingState = (this.blinkingState == 'visible') ? 'invisible' : 'visible';
    }, 1000)
  }

  finish() {
    this.isFinished = true
    console.log(this.isFinished)
    this.newItemEvent.emit({ isFinished: this.isFinished, correctAnswers: this.correctAnswers })
  }


  displayTimer() {
    return Math.floor(this.seconds / 3600) + ":" + Math.floor(this.seconds / 60) + ":" + Math.floor(this.seconds % 60)
  }

  selectedAnswer(answer) {
    this.progress++

    if (answer)
      this.correctAnswers++

    if (this.currentQuestion + 1 < this.quizz.questions.length) {
      setTimeout(() => {
        this.currentQuestion++;
      }, 1000);
    }

    if (this.currentQuestion + 1 == this.quizz.questions.length) {
      this.isFinished = true
      this.isDisabled = true
      clearInterval(this.timer)
    }
  }

}
