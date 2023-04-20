import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { Grupo } from 'src/app/models/Grupo';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { GruposService } from 'src/app/services/Grupos.service';
import { TeamLeadersService } from 'src/app/services/TeamLeaders.service'; 
import { first } from 'rxjs';
import { TeamLeader } from 'src/app/models/TeamLeader';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamLeaderComponent } from '../create-team-leader/create-team-leader.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: Usuario = new Usuario();
  loading: boolean = false;
  grupos: Array<Grupo> = new Array<Grupo>();
  teamLeaders: Array<TeamLeader> = new Array<TeamLeader>();
  grupo: any;
  showDropdown = false;
  showSelect = false;
  selectedGroup: any

  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private _gruposService: GruposService,
    private _teamLeadersService: TeamLeadersService
  ) { }
  
  ngOnInit() {
    this.user = this.parseLocalStorage(localStorage.getItem('user') || "");
    if (this.user.isAdmin == 1) {
      this.obtenerTeamLeaders();
    } else if(this.user.isTeamLeader == 1) {
      this.obtenerGrupos();
    } else {
      console.log('Ocurrió un error al obtener el rol del usuario')
    }
  }

  parseLocalStorage(user: string): Usuario {
    let json = JSON.parse(user);
    return new Usuario(json.id, " ", json.apellido, json.nombre, json.email, json.isAdmin, json.isTeamLeader, json.habilitado, json.grupoId, json.token, json.rol, json.stack) 
  }

  getRol(isAdmin: number) : string {
    return isAdmin === 1 ? 'Administrador' : 'Team Leader'
  } 

  obtenerGrupos() {
    this.grupos = new Array<Grupo>();
    this.loading = true;
    this._gruposService.getAll(this.user.id ? this.user.id : '1234') 
      .pipe(first())
      .subscribe((response: any) => {
        this.grupos = response.data[0].teams;
      console.log(this.grupos)    
    });
    this.loading = false;
  }

  obtenerTeamLeaders() {
    // this.teamLeaders = new Array<Grupo>();
        this.loading = true;    
        this._teamLeadersService.getAll()
          .pipe(first())
          .subscribe((response: any) => {
            if (response.success) {
              this.teamLeaders = response.teamLeaders as TeamLeader[];
              console.log(this.teamLeaders)
            } else {
              console.log('error')
            }         
        });
        this.loading = false;
  }

  openModalAddTl(){
    const dialogRef = this._dialog.open(CreateTeamLeaderComponent,{
      maxWidth:'750px',
      maxHeight:'700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this._dialog.closeAll();
      console.log(`Dialog result: ${result}`);
    });
  }

  onClick(groupName: any, teamId: any) {
    localStorage.setItem('groupName', groupName);
    localStorage.setItem('teamId', teamId);
    this._router.navigateByUrl('/detail');
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onGroupSelected(group: any) {
    localStorage.setItem('groupName', group.name);
    localStorage.setItem('groupId', group.id);
    this._router.navigateByUrl('/detail');
  }

}
