import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(private router:Router) {}
  ngOnInit() {
    //checking if user is logged in else redirect to login
    //we did that at tab level to ensure that sub routes will not be accessible
    if(!sessionStorage.getItem('auth')){
      this.router.navigateByUrl('/login');
    }
  }
  logout(){
    //remove auth ( user id ) from session storage 
    sessionStorage.removeItem('auth')
    this.router.navigateByUrl('/login');
  }
}
