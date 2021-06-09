import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
users:User[];
exist=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.user=new User();
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
login()
{
  for(let us of this.users)
  {
  if((this.user.email==us.email)&&(this.user.mdp==us.mdp))
  {
    this.exist=true;
    localStorage.setItem("id",us.id);
    localStorage.setItem("grade",us.grade);
    window.location.replace("/dashboard/profile");
  }
  }
  if(this.exist==false)
  alert("compte non reconnue!");


}
}


