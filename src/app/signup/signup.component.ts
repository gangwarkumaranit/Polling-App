import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { SignupService } from './signup.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required]),
    role: new FormControl('')
  }, { validators: PasswordValidator });

  showme = false;
  loginForm: any;
  loginService: any;

  get username() {
    return this.signupForm.get('username');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get repassword() {
    return this.signupForm.get('repassword');
  }

  constructor(private signupService: SignupService, private _router: Router) { }

  ngOnInit(): void {
  }
  signup() {
    this.signupService.signup(this.signupForm.value.username, this.signupForm.value.password, this.signupForm.value.role).subscribe((data: any) => {
      console.log(data, this.signupForm.value);
      localStorage.setItem('token', data.token);

      if (data.error) {
        this.showme = true;
      }

     else {
        const res = this.loginService.login(this.loginForm.value.username, this.loginForm.value.password);
        if (data.token) {
          this._router.navigate (['../dashboard']);
        }
      }
    }

    )
  }
}