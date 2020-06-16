import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-canactivate';

  loggedOut = true;

  constructor(private authService:AuthService){}

  onSubmit(f: NgForm) {
    if(f.value.username == "priyanka" && f.value.password == "1234"){
      this.authService.loggedIn();
      this.loggedOut = false;
    }else{
      this.authService.loggedOut();
      this.loggedOut = true;
    }
  }
  
  onLogOut(){
    this.authService.loggedOut();
    this.loggedOut = true;
  }

}
