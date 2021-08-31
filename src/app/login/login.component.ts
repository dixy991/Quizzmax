import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fade } from '../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    fade,
  ]
})
export class LoginComponent implements OnInit {

  //@ViewChild("registerForm") form: NgForm

  emailconfirm: boolean = false
  emailPattern: string = "^(([^<>()\[\]\\.,;:\s@]+(\.[^ <>() \[\]\\.,;: \s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$"

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(form: NgForm) {
    localStorage.clear()
    localStorage.setItem("user", JSON.stringify({ name: form.value.name, email: form.value.email }))
    this.route.navigate(["/quizzes"]);
    // console.log(form)
  }

}
