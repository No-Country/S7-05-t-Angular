import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/Authentication.service';
import { environment } from 'src/environment';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  value: string = '';
  private urlApi = environment.url;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.value = this.data.value;
    this.urlApi = `${this.urlApi}/${this.value}`
  }


  public onSubmit(): void {
    this._authenticationService.login(this.urlApi, this.username, this.password).subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  //this._router.navigateByUrl('/home');
  //this.dialog.closeAll();
  // this._authService.login(this.username, this.password).pipe(
  //   take(1)
  // ).subscribe({
  //   next: _ => {
  //     this.loginValid = true;
  //   },
  //   error: _ => this.loginValid = false
  // });
}