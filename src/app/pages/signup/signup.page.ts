import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../../_services/auth/fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email: string;
  public password: string;
  public name: string;

  constructor(
    public router: Router,
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.fireService.signup({ email: this.email, password: this.password }).then(res => {
      if (res.user.uid) {
        let data = {
          email: this.email,
          password: this.password,
          name:this.name,
          uid: res.user.uid
        }
        this.fireService.saveDetails(data).then(res => {
          this.router.navigateByUrl('/login');
        }, err => {
          console.log(err);
        })
      }
    }, err => {
      alert(err.message);

      console.log(err);
    })
  }

}