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
  user: Usuario | null;
  loading: boolean = false;
  grupos: Array<Grupo> = new Array<Grupo>();

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _gruposService: GruposService,
  ) {
    this.user = this._authenticationService.userValue;
  }
  
  ngOnInit() {
    // this.obtenerGrupos();
    this.grupos = [
      {id: 1, turno: 'T', seleccionado: 7, numero: 8, stack: 'Angular'}, 
      {id: 2, turno: 'M', cohorte: 9, numero: 10, stack: 'React Java'}, 
      {id: 3, turno: 'T', seleccionado: 7, numero: 11, stack: 'Python'}, 
      {id: 4, turno: 'M', cohorte: 9, numero: 15, stack: 'Angular'}, 
    ]

    console.log(this._authenticationService.userValue);
    this.user = this._authenticationService.userValue;
  }

  onClick() {
    this._router.navigateByUrl('/detail');
  }

  getRol(rol: number) : string {
    return rol === 1 ? 'Administrador' : 'Team Leader'
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
