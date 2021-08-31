import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { photoState } from 'src/app/animations';
import { User } from 'src/app/user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [
    photoState
  ]
})
export class ResultComponent implements OnInit {

  user: User

  @Input() correctAnswers: number = 0
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"))
  }

  startOver() {
    this.newItemEvent.emit({ isFinished: false })
  }

  getName() {
    return this.user.name
  }

  displayResult() {
    if (this.correctAnswers == 0) {
      return "Oh no " + this.user.name + ", you gotta learn more"
    }

    return "Congrats " + this.user.name + "! You got " + this.correctAnswers + " right"
  }

}
