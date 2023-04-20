import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { WeeksAndMeetService } from 'src/app/services/weeks-and-meet.service';

export interface Member {
  id: string;
  fullName: string;
  rol: string;
  meeting1attendance: boolean;
  meeting1absence: boolean;
  activity: string;
}

const MEMBERS_DATA: Member[] = [
  {
    id: '7bb97952-a5fb-4a68-9da8-9017b078b42f',
    fullName: 'Olivia White',
    rol: 'Frontend',
    meeting1attendance: true,
    meeting1absence: false,
    activity: 'Creación de componentes principales'
  },
  {
    id: '5542b8ee-01bb-4f9d-b86e-f3cb419b10e0',
    fullName: 'James Martinez',
    rol: 'Backend',
    meeting1attendance: true,
    meeting1absence: false,
    activity: 'Preparar controladores y modelos'
  },
  {
    id: '9ac8bc47-9468-4265-96e2-ca1e40223fab',
    fullName: 'Gabriela Torres',
    rol: 'Tester',
    meeting1attendance: true,
    meeting1absence: false,
    activity: 'Casos de prueba para el login'
  },
  {
    id: '3e77afa4-288b-4c26-b5ee-07da2ff71316',
    fullName: 'Luis Pérez',
    rol: 'Backend',
    meeting1attendance: true,
    meeting1absence: false,
    activity: 'Crear repositorio'
  },
  {
    id: 'ed3b01ac-0f70-4a06-9f3b-5ce1c31984c3',
    fullName: 'Juan González',
    rol: 'Backend',
    meeting1attendance: true,
    meeting1absence: false,
    activity: 'Preparar diagrama de relaciones de entidades'
  },
];

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  isMeetButtonClicked1 = false;
  isMeetButtonClicked = false;
  meetElement: any;
  groupName: any;
  comentario: string = '';
  weeks: any;
  selectedWeek: string = 'c5d5d5c5-5298-4c25-8825-5c1d0fae55ac';

  toggleButton(){
    const meetElement = document.getElementById('meet');
    if (window.innerWidth < 890) {

      this.isMeetButtonClicked = !this.isMeetButtonClicked;

      if (meetElement) {
        if (this.isMeetButtonClicked) {
          meetElement.setAttribute('id', 'meet');
        } else if (window.innerWidth < 890) {
          meetElement.removeAttribute('id');
        }
      }
    }else{
      this.meetElement.style.display = 'none';
    }
  }

  toggleButton1(){
    const meetElement = document.getElementById('meet1');
    if (window.innerWidth < 890) {

      this.isMeetButtonClicked1 = !this.isMeetButtonClicked1;

      if (meetElement) {
        if (this.isMeetButtonClicked) {
          meetElement.setAttribute('id', 'meet1');
        } else if (window.innerWidth < 890) {
          meetElement.removeAttribute('id');
        }
      }
    }else{
      this.meetElement.style.display = 'none';
    }
  }


  displayedColumns: string[] = ['fullName', 'rol', 'meeting1', 'activity'];
  members: Member[];

  constructor(
    private _router: Router,
    private _weekAndMeetServ: WeeksAndMeetService,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute) {
    this.members = MEMBERS_DATA;
  }

  ngOnInit(): void {
    this.groupName = localStorage.getItem('groupName');
    this.getAllWeeks();
  }

  getAllWeeks(){
    this._weekAndMeetServ.getAllWeeks().subscribe(
      (res: any) => {
        this.weeks = res.getWeeks;
      }
    )
  }

  sendAllInformationOfMeet(){
    console.log(this.members);
    this._snackBar.open('La informacion se envio correctamente', 'OK');
    /*this._weekAndMeetServ.createMeet({'weekId': this.obtenerWeekId(1), 'teamId': localStorage.getItem('teamId'), 'meet_number': 1, 'date': new Date(), 'observation': this.comentario}).subscribe(
      (res: any) => {
        console.log(res);
        this.members.map( elem => {
          this._weekAndMeetServ.createAttendance({'is_present': elem.meeting1attendance, 'studentId': elem.id, 'meetingId': res.meeting.id}).subscribe( (res) => {
            console.log(res);
          });
        })
      }
    )*/
    // invocar servicio de crear meet y crear asistencias
  }

  obtenerWeekId(weekNumber: number):string {
    let index = this.weeks.findIndex((elem: any) => elem.number == weekNumber)
    if (index != -1) {
      return this.weeks[index].id
    }
    return 'id';
  }

  onWeekClick(id: string) {
    this.selectedWeek = id;
    console.log(id)
  }
   
}