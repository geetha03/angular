import { Component, OnInit } from '@angular/core';
import { StudentslistService } from '../studentslist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent  {

  studentsList : any;
  constructor(private studentlistService:StudentslistService) { 
    this.studentsList = this.studentlistService.getStudentsList();
    //this.studentlistService.getStudentsList().subscribe(res => {
     // console.log(res);
   // });
  }

  

}
