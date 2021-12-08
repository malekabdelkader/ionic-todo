import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';







@Injectable({
  providedIn: 'root'
})
export class TodoService {
  task: AngularFireList<any>;
  tasksCollection: any;
  constructor(private db: AngularFireDatabase) {
    this.task = this.db.list('task');
  }
  // Create

  createTask(name: any, date,user) {    
    return this.task.push({ name: name, date: date, state: false ,user})
  }

  listTask() {
    return this.db.list('/task')
  }

  update(key, object) {
    return this.task.update(key, { state: true })
  }



}
