import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/Authentication.service';
import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService ]
})

export class LoginComponent implements OnInit{
  public loginValid = true;
  public username = '';
  public password = '';

  // private readonly returnUrl: string;

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {
    // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  public ngOnInit(): void {
    // this._authenticationService.isAuthenticated$.pipe(
    //   filter((isAuthenticated: boolean) => isAuthenticated),
    //   takeUntil(this._destroySub$)
    // ).subscribe( _ => this._router.navigateByUrl(this.returnUrl));
  }


  public onSubmit(): void {
    this.loginValid = true;
    this._router.navigateByUrl('/home');

    // this._authService.login(this.username, this.password).pipe(
    //   take(1)
    // ).subscribe({
    //   next: _ => {
    //     this.loginValid = true;
    //   },
    //   error: _ => this.loginValid = false
    // });
  }

}
