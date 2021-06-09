import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  id:string;
  public query: any = '';
p: number = 1;
  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    this.users=[];
this.id=localStorage.getItem("id");
    this.read();
    
  }
  read()
  {
    this.userService.read_Users().subscribe(data => {
  
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,

          nom: e.payload.doc.data()["nom"],
          prenom: e.payload.doc.data()["prenom"],
          age: e.payload.doc.data()["age"],
          email: e.payload.doc.data()["email"],
          mdp: e.payload.doc.data()["mdp"],
          adresse: e.payload.doc.data()["adresse"],
          classe: e.payload.doc.data()["classe"],
          specialite: e.payload.doc.data()["specialite"],
          grade: e.payload.doc.data()["grade"],
   
   
  
  
        };
      });
      console.log(this.users);
    });
  
  
  }
}
