import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../../_services/auth/fireservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public router: Router,
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }


  login() {
    this.fireService.login({ email: this.email, password: this.password }).then(res => {
      if (res.user.uid) {
        //set a session storage variable to store and control user session (
       // it should be token ) please forgive us about that ;)
        sessionStorage.setItem('auth',res.user.uid)
        this.router.navigateByUrl('/tabs/to-do-list');
      }
    }, err => {
      alert(err.message)
      console.log(err);
    })
  }
}