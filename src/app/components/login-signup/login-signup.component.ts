import { Component } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
    position: String = "";

  changePosition() {
    this.position = "right-panel-active"
  }
  positionInitial() {
    this.position = "";
  }
}
