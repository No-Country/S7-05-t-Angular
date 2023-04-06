import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  subscription: Subscription = new Subscription;

  constructor( private router: Router) {
    router.events.subscribe( (val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/login' || val.url == '/') {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
      }
    }) 
  }


  ngOnInit() {
  }

  onClickLogOut():void {
      // this._authenticationService.logout();
      this.router.navigateByUrl('/login');
  }

}
