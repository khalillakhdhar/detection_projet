import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TesteComponent } from './teste/teste.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { CoursComponent } from './cours/cours.component';

const routes: Routes = [
  {path:'dashboard',component:LayoutComponent,children:
[
  {path:"teste",component:TesteComponent},
  {path:'profile',component:ProfileComponent},
  {path:'users',component:UsersComponent},
  {path:'reclamation',component:ReclamationComponent},
  {path:'cours',component:CoursComponent},

],

}, 
  {path:'',component:LoginComponent},
  {path:"signup",component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
