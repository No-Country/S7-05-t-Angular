import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeeksAndMeetService } from 'src/app/services/weeks-and-meet.service';

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
export class GroupDetailComponent implements OnInit {
  isMeetButtonClicked1 = false;
  isMeetButtonClicked = false;
  meetElement: any;
  groupName: any;
  weeks: any;

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

  onWeekClick(weekId: string) {
    console.log(`Se hizo clic en la semana con el ID: ${weekId}`);
  }

  sendAllInformationOfMeet(){
    // invocar servicio de crear meet y crear asistencias
  }
   
}