import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  isSelect: boolean
  oldAd: boolean
  newAd: boolean
  oldAdmissionFormGroup: FormGroup;
  newAdmissionFormGroup: FormGroup;
  ngOnInit(): void {
    this.isSelect = true;
    this.oldAdmissionFormGroup = this.formBuilder.group({
      studentId: ["", Validators.required],
      standardType: ["", Validators.required],
      admissionStatus: ["", Validators.required],
    });
this.newAdmissionFormGroup=this.formBuilder.group({
  studentName:["",Validators.required],
  studentGaurdianName:["",Validators.required],
  studentGRNo:["",Validators.required],
  dateOfBirth:["",Validators.required],
  standardType:["",Validators.required],
})
  }
  addNewAdmission(){
    console.log(this.newAdmissionFormGroup.value);
    this.router.navigateByUrl("addGardianDetail");
  }
  addAdmission(){
    console.log(this.oldAdmissionFormGroup.value);
  }
  newAdmission() {
    this.isSelect = false;
    this.newAd = true;
  }
  oldAdmission() {
    this.isSelect = false;
    this.oldAd = true;
  }
}
