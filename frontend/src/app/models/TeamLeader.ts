import {Grupo} from './Grupo'
export class TeamLeader {
    id?: number;
    nombre?: string;
    apellido?: string;
    teams?: Array<Grupo>;
    student?: any;
    studentId?: any;
    
    constructor(
        id = 0,
        nombre = '',
        apellido = '',
        grupos = [],
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        // this.grupos = grupos;
    }
}
