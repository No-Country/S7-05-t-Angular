import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  // {path: '', canActivate: [LoginGuard], component: LandingComponent},
  {path: '', component: LandingComponent},
  { path: 'login', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: GroupDetailComponent },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
