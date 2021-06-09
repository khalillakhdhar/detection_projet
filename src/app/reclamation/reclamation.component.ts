import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../classes/reclamation';
import { ReclamationService } from '../services/reclamation.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {


  reclamations:Reclamation[];
  id:string;p: number = 1;
  reclamation:Reclamation;
  constructor(private reclamationService:ReclamationService) { }
  
  ngOnInit(): void {
    this.reclamation=new Reclamation();
    this.reclamations=[];
this.id=localStorage.getItem("id");
    this.read();
    
  }
  add()
  {
    this.reclamation.date=Date();
    let rec=Object.assign({},this.reclamation);
this.reclamationService.create_NewReclamation(rec);
this.reclamation=new Reclamation();
  }
  read()
  {
    this.reclamationService.read_Reclamations().subscribe(data => {
  
      this.reclamations = data.map(e => {
        return {
          id: e.payload.doc.id,

          texte: e.payload.doc.data()["texte"],
          date: e.payload.doc.data()["date"],
          
   
  
  
        };
      });
      console.log(this.reclamations);
    });
  
  
  }
}
