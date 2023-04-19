export class Grupo {
    id?: number;
    turno?: string;
    cohorte?: number;
    seleccionado?: number;
    stack?: string;
    teamLeaderId?: number;
    numero?: number;
    name?: string;
    
    constructor(
        id = 0,
        turno = '',
        cohorte = 0,
        stack = '',
        seleccionado = 0,
        teamLeaderId = 0,
        numero = 0,
    ) {
        this.id = id;
        this.turno = turno;
        this.cohorte = cohorte;
        this.stack = stack;
        this.seleccionado = seleccionado;
        this.teamLeaderId = teamLeaderId;
        this.numero = numero;
    }
}
