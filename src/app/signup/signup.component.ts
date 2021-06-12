import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=new User();
  }
 add()
{
let us=Object.assign({},this.user); //convertir la classe en objet json
this.userService.create_NewUser(us).then()
{
  alert("ajouter avec succés");
  //window.location.replace("");
};



}
}
