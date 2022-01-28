import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginService } from "./login.services"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm= new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })
  showme = false;
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data: any)=>{
      console.log(data);
      localStorage.setItem('token',data.token);
      if(data.token){
        this._router.navigate (['../dashboard']);
      }
      else{
        this.showme=true;
      }
    }) 
    }

}
