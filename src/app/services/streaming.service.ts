import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewStreaming(record) {
    return this.firestore.collection('Streamings').add(record);
  }

  read_Streamings() {
    return this.firestore.collection('Streamings').snapshotChanges();
  }

  update_Streaming(recordID, record) {
    this.firestore.doc('Streamings/' + recordID).update(record);
    console.log('updated');
  }

  delete_Streaming(record_id) {
    this.firestore.doc('Streamings/' + record_id).delete();
  }
}