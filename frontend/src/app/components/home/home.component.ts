import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { Grupo } from 'src/app/models/Grupo';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { GruposService } from 'src/app/services/Grupos.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: Usuario | null = new Usuario();
  loading: boolean = false;
  grupos: Array<Grupo> = new Array<Grupo>();
  teamLeaders: Array<Usuario> = new Array<Usuario>();

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _gruposService: GruposService,
  ) {
    // this.user = this.parseLocalStorage(localStorage.getItem('user') || "") ;  
  }
  
  ngOnInit() {
    // this.obtenerGrupos();
    this.grupos = [
      {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
      {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
      {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}, 
      {id: 4, turno: 'M', cohorte: 9, numero: 15, stack: 'Angular'}, 
    ]

    this.teamLeaders = [
      { id: 1,  apellido: 'Micaela', nombre: 'Andres', isAdmin: 0, isTeamLeader: 1, habilitado: 1, grupoId: 1, rol: 'Diseñadora Web', stack: 'Angular', 
          grupos: [ {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
          {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
          {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}]},
      { id: 2,  apellido: 'Simón', nombre: 'Martinez', isAdmin: 0, isTeamLeader: 1, habilitado: 1, grupoId: 2, rol: 'Frontend', stack: 'Angular',
          grupos: [ {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
          {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
          {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}]},
      { id: 3,  apellido: 'Luciana', nombre: 'Valencia', isAdmin: 0, isTeamLeader: 1, habilitado: 1, grupoId: 3, rol: 'Backend', stack: 'Angular', 
          grupos: [ {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
          {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
          {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}]},
      { id: 4,  apellido: 'Juan', nombre: 'Candamil', isAdmin: 0, isTeamLeader: 1, habilitado: 1, grupoId: 4, rol: 'Frontend', stack: 'Angular', 
          grupos: [ {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
          {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
          {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}]},
      { id: 5,  apellido: 'Manuela', nombre: 'Cruz', isAdmin: 0, isTeamLeader: 1, habilitado: 1, grupoId: 5, rol: 'Frontend', stack: 'Angular',
          grupos: [ {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
          {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
          {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}]},

    ]
    this.user = this.parseLocalStorage(localStorage.getItem('user') || "") ;  
  }

  parseLocalStorage(user: string): Usuario {
    let json = JSON.parse(user);
    return new Usuario(json.id, " ", json.apellido, json.nombre, json.email, json.isAdmin, json.isTeamLeader, json.habilitado, json.grupoId, json.token, json.rol, json.stack) 
  }

  onClick() {
    this._router.navigateByUrl('/detail');
  }

  getRol(isAdmin: number) : string {
    return isAdmin === 1 ? 'Administrador' : 'Team Leader'
  } 

  obtenerGrupos() {
    this.grupos = new Array<Grupo>();
        this.loading = true;    
        this._gruposService.getAll() 
          .pipe(first())
          .subscribe((response: any) => {
            this.grupos = response.data
          
        });
        this.loading = false;
  }
}
