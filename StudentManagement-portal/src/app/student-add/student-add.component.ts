import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  readonly rootURL = 'https://localhost:44364/api';
  result:any;
  constructor(private formBuilder: FormBuilder, private router: Router,private http:HttpClient) { }
  isSelect: boolean
  oldAd: boolean
  newAd: boolean
  oldAdmissionFormGroup: FormGroup;
  newAdmissionFormGroup: FormGroup;
  ngOnInit(): void {
    this.isSelect = true;
    this.oldAdmissionFormGroup = this.formBuilder.group({
      studentId: ["", Validators.required],
      standardId: ["", Validators.required],
      admissionStatus: ["", Validators.required],
    });
this.newAdmissionFormGroup=this.formBuilder.group({
  studentName:["",Validators.required],
  studentGaurdianName:["",Validators.required],
  studentGRNo:["",Validators.required],

  dateOfBirth:["",Validators.required],
  standardId:["",Validators.required],
})
  }
  addNewAdmission(){
    this.newAdmissionFormGroup.controls.standardId.setValue(2);
    this.http.post<any>('https://localhost:44364/students',{
      studentName:this.newAdmissionFormGroup.controls.studentName.value,
      studentGaurdianName:this.newAdmissionFormGroup.controls.studentGaurdianName.value,
      studentGRNo:this.newAdmissionFormGroup.controls.studentGRNo.value,
      dateOfBirth:this.newAdmissionFormGroup.controls.dateOfBirth.value,
      standardId:this.newAdmissionFormGroup.controls.standardId.value}).subscribe(res=>{
      this.result=res;
      console.log(this.result);
    })
    this.http.post<any>(this.rootURL+'/admissions',{
      studentId:this.newAdmissionFormGroup.controls.studentId.value,
      standardId:this.newAdmissionFormGroup.controls.standardId.value,
      admissionStatus:1
    }).subscribe(res=>{
      this.result=res;
    })
    this.router.navigateByUrl("addGardianDetail");
  }
   id=1;
  addAdmission(){;
    if(this.oldAdmissionFormGroup.controls.admissionStatus.value=="confirm"){
      this.oldAdmissionFormGroup.controls.admissionStatus.setValue(1);
    }
    else{
      this.oldAdmissionFormGroup.controls.admissionStatus.setValue(0);
    }
    this.http.post<any>(this.rootURL+'/admissions',{
      studentId:this.oldAdmissionFormGroup.controls.studentId.value,
      standardId:this.oldAdmissionFormGroup.controls.standardId.value,
      admissionStatus:this.oldAdmissionFormGroup.controls.admissionStatus.value
    }).subscribe(res=>{
      this.result=res;
    })
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
