import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// enum Gender {
//   'male'=1,
//   'female'=2
// }
@Component({
  selector: 'app-student-detail-add',
  templateUrl: './student-detail-add.component.html',
  styleUrls: ['./student-detail-add.component.css']
})
export class StudentDetailAddComponent implements OnInit {
  readonly rootURL = 'https://localhost:44364/api';
  result: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  // gender=Gender;
  keys = Object.keys;
  studentDetailFormGroup: FormGroup;
  ngOnInit(): void {
    this.studentDetailFormGroup = this.formBuilder.group({
      studentId: ["", Validators.required],
      address: ["", Validators.required],
      studentHeight: [""],
      studentWeight: [""],
      placeOfBirth: ["", Validators.required],
      motherTongue: ["", Validators.required],
      aadharCardNumber: [""],
      nationality: ["", Validators.required],
      gender: ["", Validators.required],
      religion: ["", Validators.required],
      identificationMark: [""],
      bloodGroup: [""],
      numberOfSibling: [""],
      lastSchoolName: [""],
    });
  }
  addStudentDetail() {
    if (this.studentDetailFormGroup.controls.gender.value == "Male") {
      this.studentDetailFormGroup.controls.gender.setValue(1);
    }
    else {
      this.studentDetailFormGroup.controls.gender.setValue(0);
    }
    console.log(this.studentDetailFormGroup.value);
    this.http.post(this.rootURL + '/StudentDetails', {
      studentId: this.studentDetailFormGroup.controls.studentId.value,
      address: this.studentDetailFormGroup.controls.address.value,
      studentHeight: this.studentDetailFormGroup.controls.studentHeight.value,
      studentWeight: this.studentDetailFormGroup.controls.studentWeight.value,
      placeOfBirth: this.studentDetailFormGroup.controls.placeOfBirth.value,
      motherTongue: this.studentDetailFormGroup.controls.motherTongue.value,
      aadharCardNumber: this.studentDetailFormGroup.controls.aadharCardNumber.value,
      nationality: this.studentDetailFormGroup.controls.nationality.value,
      gender: this.studentDetailFormGroup.controls.gender.value,
      religion: this.studentDetailFormGroup.controls.religion.value,
      identificationMark: this.studentDetailFormGroup.controls.identificationMark.value,
      bloodGroup: this.studentDetailFormGroup.controls.bloodGroup.value,
      numberOfSibling: this.studentDetailFormGroup.controls.numberOfSibling.value,
      lastSchoolName: this.studentDetailFormGroup.controls.lastSchoolName.value
    }).subscribe(res => {
      this.result = res;
      console.log(this.result);
    })
    this.router.navigateByUrl("");
  }
}
