import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewReclamation(record) {
    return this.firestore.collection('Reclamations').add(record);
  }

  read_Reclamations() {
    return this.firestore.collection('Reclamations').snapshotChanges();
  }

  update_Reclamation(recordID, record) {
    this.firestore.doc('Reclamations/' + recordID).update(record);
    console.log('updated');
  }

  delete_Reclamation(record_id) {
    this.firestore.doc('Reclamations/' + record_id).delete();
  }
}