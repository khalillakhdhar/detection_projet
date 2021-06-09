import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Cours } from '../classes/cours';
import { CoursService } from '../services/cours.service';
import { map, finalize } from "rxjs/operators";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
cours:Cours;
courses:Cours[];
downloadURL: Observable<string>;
selectedFile: File = null;
fb = "";
userData: any; // Save logged in user data
cuse: any;
public query: any = '';
p: number = 1;
  constructor(private coursService:CoursService,  private storage: AngularFireStorage,
    public afs: AngularFirestore, // Inject Firestore service
    ) { }

  ngOnInit(): void {
    this.cours=new Cours();
    this.read();
  }
  read()
  {
    this.coursService.read_Cours().subscribe(data => {
  
      this.courses = data.map(e => {
        return {
          id: e.payload.doc.id,

          date_heure: e.payload.doc.data()["date_heure"],
          url: e.payload.doc.data()["url"],
          detection: e.payload.doc.data()["detection"],
          description: e.payload.doc.data()["description"],
          classe: e.payload.doc.data()["classe"],
          
  
  
        };
      });
      console.log(this.courses);   });
  
  
  }
add()
{
  this.cours.date_heure=Date();
  this.cours.url=this.fb;
  let cr=Object.assign({},this.cours);
  this.coursService.create_NewCours(cr);
  this.cours=new Cours();

}
onFileSelected(event) {
  var n = Date.now();
  const file = event.target.files[0];
  const filePath = `/Cours/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`/Cours/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url) => {
          if (url) {
            this.fb = url;
          }
          console.log(this.fb);
        });
      })
    )
    .subscribe((url) => {
      if (url) {
        console.log(url);
        let c=this.cours.url;
        this.search(event.target.files[0].name);
//this.cours.detection=event.target.files[0].name;
       // alert(event.target.files[0].name);
      }
    });
}
search(data)
{
  for (let cr of this.courses)
  {
    if(data.includes(cr.detection))
this.cours=cr;
  }
}
delete(id)
{
  if(confirm("êtes vous sûre de vouloir supprimer cette detection?"))
  {
    this.coursService.delete_Cours(id);
  }
}
}
