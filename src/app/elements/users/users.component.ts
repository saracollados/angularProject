import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Array<string> = ['Ana', 'María', 'Daniel', 'Jorge'];
  createUser:string = '';
  searchUser:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  createNewUser() {
    this.users.push(this.createUser);
    this.createUser = '';
  }

  trackByFn(i: number) { 
    console.log(i);
  }

  deleteUser(e:any){
    let deleteUser = e.target.parentElement.parentElement.innerText;
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i] == deleteUser) {
        this.users.splice(i, 1)
      }
    } 
  }
}
