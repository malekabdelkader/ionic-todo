import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/_services/todo/todo.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
private user:string;

  constructor(private router:Router,private modalController: ModalController, private apiService: TodoService
  ) { }

  ngOnInit() {
    //this is replicated because we already know that /tabs is secure and user logged in
    //but we just did that to make sure data is sent correctly to db
    if(sessionStorage.getItem('auth')){
      this.user=sessionStorage.getItem('auth')
    }else{
      this.router.navigateByUrl('/login')
    }
  }

  dismissModal() {
    this.modalController.dismiss()
  }

  formSubmit(form) {  
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();


    var date = dd + '/' + mm + '/' + yyyy;
    //we store the task with the user id so we can filter it later by it
    this.apiService.createTask(form.value.name, date,this.user).then(res => {
      console.log(res)
    })
      .catch(error => console.log(error));
  }
}


