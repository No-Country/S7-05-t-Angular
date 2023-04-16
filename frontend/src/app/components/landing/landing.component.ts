import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(LoginComponent,{
      maxWidth:'750px',
      maxHeight:'700px',

    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialog.closeAll();
      console.log(`Dialog result: ${result}`);
    });
  }

}
