import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  students: Array<Student> = new Array<Student>();
  groups: any;

  constructor( 
    public dialogRef: MatDialogRef<CreateTeamLeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router: Router,
    private _gruposService: GruposService,
    private _studentService: StudentsService
  ) { }

  ngOnInit() {
    this.getAllStudents();
    this.getAllGroups();
  }

  compareGroups(group1: any, group2: any): boolean {
    return group1 && group2 ? group1.id === group2.id : group1 === group2;
  }

  getAllStudents(){
    this._studentService.getAllStudents().subscribe(
      (res: any) => {
      console.log(res.data)
      this.students = res.data.filter((student: { isTeamLead: boolean; }) => student.isTeamLead == false);
    })
  }

  getAllGroups(){
    this._gruposService.getAllGroups().subscribe(
      (res: any) => {
        this.groups = res.teams.filter((group: { isTeamLead: boolean; }) => group.isTeamLead == false);
    })
  }

  addTL() {
   
  }

  close() {
    this.dialogRef.close();
  }

  onStudentSelected(student: any) {

  }

  onGroupSelected(group: any) {

  }

  onSubmit(){

  }

}
