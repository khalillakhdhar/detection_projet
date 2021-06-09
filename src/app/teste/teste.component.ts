import { Component, OnInit } from '@angular/core';
import { StreamingService } from '../services/streaming.service';
import { Streaming } from '../classes/streaming';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
streaming:Streaming;
streamings:Streaming[];
  constructor(private api:StreamingService) { }


  ngOnInit(): void {
    this.streaming=new Streaming();
    this.read();
  }
add()
{
  let strm=Object.assign({},this.streaming);
  this.api.create_NewStreaming(strm);
  this.streaming=new Streaming();

}
read()
{
  this.api.read_Streamings().subscribe(data => {

    this.streamings = data.map(e => {
      return {
        id: e.payload.doc.id,

        titre: e.payload.doc.data()["titre"],
        date: e.payload.doc.data()["date"],
        classe: e.payload.doc.data()["classe"],
      
 
 


      };
    });
    console.log(this.streamings);
  });


}
}
