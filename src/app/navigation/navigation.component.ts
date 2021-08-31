import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  promise: Promise<boolean>
  isLoggedIn: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.promise = this.authService.isAuthenticated().then((auth: boolean) => {
      if (auth)
        return true;
      else
        return false;
    })
    this.promise.then((b) => {
      this.isLoggedIn = b
    })
  }

  logOut() {
    localStorage.clear()
  }

}
