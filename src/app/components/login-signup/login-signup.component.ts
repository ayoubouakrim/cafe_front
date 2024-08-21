import { Component } from '@angular/core';
import {LoginPositionService} from "../../shared/service/commun/login-position/login-position.service";

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  constructor(private positionService: LoginPositionService) {
  }

  changePosition() {
    this.position = "right-panel-active"
  }
  positionInitial() {
    this.position = "";
  }

  get position(): String {
    return this.positionService.position;
  }

  set position(value: String) {
    this.positionService.position = value;
  }
}
