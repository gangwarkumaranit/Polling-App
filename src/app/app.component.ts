import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pollingapp';
  isLoggedIn: boolean = true;

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser() {
    let token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn= true;
    }
    else {
      this.isLoggedIn= false;
    }
  }
}

