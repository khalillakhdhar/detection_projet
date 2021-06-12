import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User;
  users:User[];
  id:string;
  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    this.users=[];
    this.user=new User();
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
      this.verif();
    });
  
  
  }
  verif()
  {
  for(let us of this.users)
  {
  if((us.id==this.id))
  {
    this.user=us;
   
  
  
  }
  
  }
  console.log("currentuser",this.user);
  
  
  }


  update()
  {
    this.user.classe="ND";
    this.user.specialite="ND";
    this.user.grade=localStorage.getItem("grade");
    let us=Object.assign({},this.user);
    
    this.userService.update_User(this.user.id,us);
    alert("modifié");



  }
}
