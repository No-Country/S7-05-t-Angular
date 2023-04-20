import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Grupo } from 'src/app/models/Grupo';
import { Student } from 'src/app/models/Talento';
import { GruposService } from 'src/app/services/Grupos.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-create-team-leader',
  templateUrl: './create-team-leader.component.html',
  styleUrls: ['./create-team-leader.component.scss']
})
export class CreateTeamLeaderComponent {
  groups: Array<Grupo> = new Array<Grupo>();
  students: Array<Student> = new Array<Student>();

  constructor(
    private _router: Router,
    private _gruposService: GruposService,
    private _studentService: StudentsService
  ) { }

  ngOnInit() {
    this.getAllStudents();
    //this.getAllGroups();
  }

  getAllStudents(){
    this._studentService.getAllStudents().subscribe(
      (res: any) => {
      console.log(res.data)
      this.students = res.data.filter((student: { isTeamLead: boolean; }) => student.isTeamLead == false);
    })
  }

  /*getAllGroups(){
    this._gruposService.getAll()
  }*/

  onStudentSelected(student: any) {

  }

  onGroupSelected(group: any) {

  }

  onSubmit(){

  }

}
