import { Routes } from '@angular/router';
import {LoginSignupComponent} from "./components/login-signup/login-signup.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginSignupComponent},
  {path:'', component:LandingPageComponent}
];
