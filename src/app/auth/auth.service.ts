import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn = false;

  loggedIn(){
    this.isLoggedIn = true;
  }
  
  loggedOut(){
    this.isLoggedIn = false;
  }

}
