import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { LandingComponent } from './components/landing/landing.component';

/* Angular Material */
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatSnackBarModule } from '@angular/material/snack-bar';
=======
import {MatSnackBarModule} from '@angular/material/snack-bar';
>>>>>>> c84afcd639f465d391cf4e3b8836a42ed1cf5efb

import {AuthenticationService} from './services/Authentication.service';
import {GruposService} from './services/Grupos.service';
import {TeamLeadersService} from './services/TeamLeaders.service';
import { CreateTeamLeaderComponent } from './components/create-team-leader/create-team-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    GroupDetailComponent,
    LandingComponent,
    CreateTeamLeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule,
<<<<<<< HEAD
    MatSnackBarModule
=======
    MatSnackBarModule,
>>>>>>> c84afcd639f465d391cf4e3b8836a42ed1cf5efb
  ],
  providers: [AuthenticationService, GruposService, TeamLeadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
