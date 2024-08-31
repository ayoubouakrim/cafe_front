import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LoginPositionService} from "../../../shared/service/commun/login-position/login-position.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private loginPositionService: LoginPositionService) {
  }

  public goSignUp() {
    this.loginPositionService.position = "right-panel-active";
  }
  public goSignIn() {
    this.loginPositionService.position = "";
  }

}
