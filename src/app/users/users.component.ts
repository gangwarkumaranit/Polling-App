import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  [x: string]: any;
  data= [];

  constructor(private userService: UserService) { 
    
     
      }

  ngOnInit(): void {
    this.user();
  }
  user () { this.userService.getData().subscribe(  (data: any)=> {
    console.log(data);
    this.data=data.data;
      })
    }
  

}