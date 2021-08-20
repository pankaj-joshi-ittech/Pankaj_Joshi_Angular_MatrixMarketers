import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit { 
  
  users:any = []; 

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.handleToGetUsers();
  }

  handleToGetUsers(){
    this.userService.getUsers().subscribe(response =>{
      this.users = response.data; 
    });
  }

  sortRow(i:number){
    if(i == (this.users.length - 1)){
      this.users.findIndex((element:any,index:number) =>{
        if(i == index){ 
          this.users[i] = this.users[i-1];
          this.users[i - 1] = element; 
        }
      })
    }else if(i >= 0){
      this.users.findIndex((element:any,index:number) =>{
        if(i == index){ 
          this.users[i] = this.users[i+1];
          this.users[i + 1] = element; 
        }
      })
    }
  }

}
