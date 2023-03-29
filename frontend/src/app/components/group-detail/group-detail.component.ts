import { Component } from '@angular/core';

export interface Member {
  fullName: string;
  rol: string;
  meeting1attendance: boolean;
  meeting2attendance: boolean;
  meeting3attendance: boolean;
  observations: string;
}

const MEMBERS_DATA: Member[] = [
  {
    fullName: 'Juanita Perez',
    rol: 'Frontend',
    meeting1attendance: true,
    meeting2attendance: false,
    meeting3attendance: true,
    observations: 'N/A'
  },
  {
    fullName: 'Maria Gutierrez',
    rol: 'Backend',
    meeting1attendance: true,
    meeting2attendance: true,
    meeting3attendance: true,
    observations: 'Arrived late to Meeting 3'
  },
  {
    fullName: 'Marcos Diaz',
    rol: 'Tester',
    meeting1attendance: false,
    meeting2attendance: false,
    meeting3attendance: true,
    observations: 'Absent from Meeting 1 and 2'
  },
  {
    fullName: 'Lucas Gomez',
    rol: 'Backend',
    meeting1attendance: true,
    meeting2attendance: true,
    meeting3attendance: true,
    observations: 'Arrived late to Meeting 3'
  },
  {
    fullName: 'Nicolas Sandoval',
    rol: 'Backend',
    meeting1attendance: true,
    meeting2attendance: true,
    meeting3attendance: true,
    observations: 'Arrived late to Meeting 3'
  },
];

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.sass']
})
export class GroupDetailComponent {
  displayedColumns: string[] = ['fullName', 'rol', 'meeting1', 'meeting2', 'totalAttendance', 'observations'];
  dataSource = MEMBERS_DATA;
  members: Member[] = MEMBERS_DATA;

  getTotalAttendance(member: Member): number {
    let totalAttendance = 0;
    if (member.meeting1attendance) totalAttendance++;
    if (member.meeting2attendance) totalAttendance++;
    if (member.meeting3attendance) totalAttendance++;
    return totalAttendance;
  }
}
