import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator } from '@angular/forms'

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



 checkUser(){
 let isLoggedIn = localStorage.getItem('token');
 if(isLoggedIn){
  isLoggedIn: true;
 }
 else{
   isLoggedIn: false;
 }
 }

 }

