import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { map } from 'rxjs/operators';
import { TodoService } from '../../_services/todo/todo.service';
import { AddTaskPage } from '../tasks/add-task/add-task.page';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

  taskCollection: any;
  constructor(private apiService: TodoService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    
    this.apiService.listTask().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() as {} })
        )
      )
    ).subscribe(task => {
      this.taskCollection = task;
    }, (error) => {
      console.log(error);
    });

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTaskPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
