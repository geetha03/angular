import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-basic-info-component',
  templateUrl: './basic-info-component.component.html',
  styleUrls: ['./basic-info-component.component.css']
})
export class BasicInfoComponentComponent {
  basicInfoForm:any= FormGroup;
  submitted= false;
  

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit() {
  this.basicInfoForm = this.formBuilder.group({
    title: ['', Validators.required],
    name: ['',[Validators.required,Validators.minLength(10)]],
    email: [],
    mobile: [],
    date_of_birth: [],
    gender: []
  })
}

  get basicData() {
    return this.basicInfoForm.controls;
  }


  onSubmit(){
    this.submitted = true;
    if(this.basicInfoForm.valid){
      
    }else{
      return;
    }
  }

  





}
