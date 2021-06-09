import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TesteComponent } from './teste/teste.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { UsersComponent } from './users/users.component';
import { CoursComponent } from './cours/cours.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TesteComponent,
    ProfileComponent,
    ReclamationComponent,
    UsersComponent,
    CoursComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireStorageModule,    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
