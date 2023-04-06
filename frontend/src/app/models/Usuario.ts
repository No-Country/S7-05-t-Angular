export class Usuario {
    id?: number;
    email?: string;
    password?: string;
    apellido?: string;
    nombre?: string;
    rol?: number;
    habilitado?: number;
    grupoId?: number;
    token?: string;

    constructor(
        id = 0,
        password = '',
        apellido = '',
        nombre = '',
        email = '',
        rol = 0,
        habilitado = 0,
        grupoId = 0,
        token = '',
    ) {
        this.id = id;
        this.password = password;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.habilitado = habilitado;
        this.grupoId = grupoId;
        this.token = token;
    }
}
