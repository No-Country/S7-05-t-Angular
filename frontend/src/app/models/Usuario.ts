import { Grupo } from "./Grupo";

export class Usuario {
    id?: string;
    email?: string;
    password?: string;
    apellido?: string;
    nombre?: string;
    isAdmin?: number;
    isTeamLeader?: number;
    habilitado?: number;
    grupoId?: number;
    token?: string;
    rol?: string;
    stack?: string;
    grupos?: Array<Grupo>;
    
    constructor(
        id = '',
        password = '',
        apellido = '',
        nombre = '',
        email = '',
        isAdmin = 0,
        isTeamLeader = 0,
        habilitado = 0,
        grupoId = 0,
        token = '',
        rol = '',
        stack = ''
    ) {
        this.id = id;
        this.password = password;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.isAdmin = isAdmin;
        this.isTeamLeader = isTeamLeader;
        this.habilitado = habilitado;
        this.grupoId = grupoId;
        this.token = token;
        this.rol = rol;
        this.stack = stack;
    }
}
