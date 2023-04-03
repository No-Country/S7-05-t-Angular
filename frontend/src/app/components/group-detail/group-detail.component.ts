import { Component } from '@angular/core';

export interface Member {
  fullName: string;
  rol: string;
  meeting1attendance: boolean;
  activity: string;
}

const MEMBERS_DATA: Member[] = [
  {
    fullName: 'Juanita Perez',
    rol: 'Frontend',
    meeting1attendance: true,
    activity: 'Actividad de esta semana'
  },
  {
    fullName: 'Maria Gutierrez',
    rol: 'Backend',
    meeting1attendance: true,
    activity: 'Actividad de esta semana'
  },
  {
    fullName: 'Marcos Diaz',
    rol: 'Tester',
    meeting1attendance: false,
    activity: 'Actividad de esta semana'
  },
  {
    fullName: 'Lucas Gomez',
    rol: 'Backend',
    meeting1attendance: true,
    activity: 'Actividad de esta semana'
  },
  {
    fullName: 'Nicolas Sandoval',
    rol: 'Backend',
    meeting1attendance: true,
    activity: 'Actividad de esta semana'
  },
];

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent {
  displayedColumns: string[] = ['fullName', 'rol', 'meeting1', 'activity'];
  members: Member[];

  constructor() {
    this.members = MEMBERS_DATA;
  }
}
