import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  gender=Gender;
  keys=Object.keys;
  studentDetailFormGroup:FormGroup;
  ngOnInit(): void {
    this.studentDetailFormGroup=this.formBuilder.group({
      studentId:["",Validators.required],
      address:["",Validators.required],
      studentHeight:[""],
      studentWeight:[""],
      placeOfBirth:["",Validators.required],
      motherTongue:["",Validators.required],
      aadharCardNumber:[""],
      nationality:["",Validators.required],
      gender:["",Validators.required],
      religion:["",Validators.required],
      identificationMark:[""],
      bloodGroup:[""],
      numberOfSibling:[""],
      lastSchoolName:[""],
    });
  }
  addStudentDetail(){
console.log(this.studentDetailFormGroup.value);
this.router.navigateByUrl("");
  }
}
