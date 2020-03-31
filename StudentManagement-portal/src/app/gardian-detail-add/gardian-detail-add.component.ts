import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gardian-detail-add',
  templateUrl: './gardian-detail-add.component.html',
  styleUrls: ['./gardian-detail-add.component.css']
})
export class GardianDetailAddComponent implements OnInit {
  readonly rootURL = 'https://localhost:44364/api';
  result: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  guardianDetailFormGroup: FormGroup;
  ngOnInit(): void {
    this.guardianDetailFormGroup = this.formBuilder.group({
      studentId: ["", Validators.required],
      fatherName: ["", Validators.required],
      motherName: ["", Validators.required],
      fatherOccupation: ["", Validators.required],
      motherOccupation: ["", Validators.required],
      fatherEducation: ["", Validators.required],
      motherEducation: ["", Validators.required],
      fatherReligion: ["", Validators.required],
      contactNumber: ["", Validators.required],
      emailId: ["", Validators.required],
      address: ["", Validators.required],
      pincode: ["", Validators.required],
    });
  }
  addGaurdianDetail() {
    // console.log("pass")
    // this.http.get<any>('https://localhost:44364/api/GuardianDetails').subscribe(res=>{
    //   this.result=res;
    //   console.log(this.result)
    // })
    // console.log("end")
    // console.log(this.guardianDetailFormGroup.value);
    this.http.post(this.rootURL + '/GuardianDetails', {
      studentId: this.guardianDetailFormGroup.controls.studentId.value,
      fatherName: this.guardianDetailFormGroup.controls.fatherName.value,
      motherName: this.guardianDetailFormGroup.controls.motherName.value,
      fatherOccupation: this.guardianDetailFormGroup.controls.fatherOccupation.value,
      motherOccupation: this.guardianDetailFormGroup.controls.motherOccupation.value,
      fatherEducation: this.guardianDetailFormGroup.controls.fatherEducation.value,
      motherEducation: this.guardianDetailFormGroup.controls.motherEducation.value,
      fatherReligion: this.guardianDetailFormGroup.controls.fatherReligion.value,
      contactNumber: this.guardianDetailFormGroup.controls.contactNumber.value,
      emailId: this.guardianDetailFormGroup.controls.emailId.value,
      address: this.guardianDetailFormGroup.controls.address.value,
      pincode: this.guardianDetailFormGroup.controls.pincode.value
    }).subscribe(res => {
      this.result = res;
      console.log(this.result);
    })
    this.router.navigateByUrl("fees");
  }
}
