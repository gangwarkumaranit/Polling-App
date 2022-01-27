import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm= new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    repassword: new FormControl('',[Validators.required])
    
  },{validators: PasswordValidator});

 get username(){
   return this.signupForm.get('username');
 }
 get password(){
   return this.signupForm.get('password');
 }
 get repassword(){
  return this.signupForm.get('repassword');
}

  constructor() { }

  ngOnInit(): void {
  }

}
