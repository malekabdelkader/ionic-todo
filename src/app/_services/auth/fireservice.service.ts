import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from'@angular/fire//compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(public firestore:AngularFirestore,public auth:AngularFireAuth) { }
    login(data:loginDetails){
      return this.auth.signInWithEmailAndPassword(data.email, data.password);
    }
    signup(data:loginDetails) {
      return this.auth.createUserWithEmailAndPassword(data.email, data.password);
    }
  
    saveDetails(data:loginDetails) {
      return this.firestore.collection("users").doc(data.uid).set(data);
    }
    getDetails(data:loginDetails) {
      return this.firestore.collection("users").doc(data.uid).valueChanges();
    }
}
interface loginDetails{
  uid?:string
  email?:string
  password?:string
  name?:string
}
 