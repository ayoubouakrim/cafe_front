import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPositionService {

  private _position: String = "";
  constructor() { }

  get position(): String {
    return this._position;
  }

  set position(value: String) {
    this._position = value;
  }

}
