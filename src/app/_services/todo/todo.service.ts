import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';







@Injectable({
  providedIn: 'root'
})
export class TodoService {
  task: AngularFireList<any>;
  tasksCollection: any;
  //we did chose AngularFireDatabase in the place of firestore (key value set)
  //because it uses collections which it may be easier to filter on (collection of doc)
  constructor(private db: AngularFireDatabase) {
    this.task = this.db.list('task');
  }
  createTask(name: any, date,user) {    
    return this.task.push({ name: name, date: date, state: false ,user})
  }

  listTask() {
    //we tried to filter tasks here by this code
    //ref => ref.orderByChild('user').equalTo('user passed on param')
    //but it didn't work ( we still don't why Xd)
    //we'll be happy to recieve your help ( to future need ;) ) thannkss !
    return this.db.list('/task')
  }

  //this supposed to get multiple data (object)
  //but we didn't get enough time to work on it though
  //it was supposed to update a satate to finished too
  update(key, object) {
    return this.task.update(key, { state: true })
  }



}
