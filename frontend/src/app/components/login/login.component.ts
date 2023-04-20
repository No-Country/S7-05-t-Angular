import { Component, Inject, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthenticationService } from '../../services/Authentication.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
    private _authenticationService: AuthenticationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  public ngOnInit(): void {

  }


  public onSubmit(): void {
    if (this.data.tipoLogin == 1) {
      this._authenticationService.loginAdmin(this.username, this.password).subscribe( res => {

        if (res == null) {
          this.loginValid = false;
        } else {
          this.loginValid = true;
          this._router.navigateByUrl('/home');
          this.dialog.closeAll();  
        }
      })
    }
    if (this.data.tipoLogin == 2) {
      this._authenticationService.loginTeamLeader(this.username, this.password).subscribe( res => {
        if (res == null) {
          this.loginValid = false;
        } else {
          this.loginValid = true;
          this._router.navigateByUrl('/home');
          this.dialog.closeAll();  
        }
      })
    }

  }

}
