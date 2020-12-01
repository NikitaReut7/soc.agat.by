import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl("")
  });

  //Firestore CRUD actions example
  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("emails")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateCoffeeOrder(data) {
    return this.firestore
      .collection("emails")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoffeeOrders() {
    return this.firestore.collection("emails").snapshotChanges();
  }

  deleteCoffeeOrder(data) {
    return this.firestore
      .collection("emails")
      .doc(data.payload.doc.id)
      .delete();
  }
}
