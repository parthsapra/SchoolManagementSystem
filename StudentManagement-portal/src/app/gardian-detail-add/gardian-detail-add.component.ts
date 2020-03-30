import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gardian-detail-add',
  templateUrl: './gardian-detail-add.component.html',
  styleUrls: ['./gardian-detail-add.component.css']
})
export class GardianDetailAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
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
    console.log(this.guardianDetailFormGroup.value);
    this.router.navigateByUrl("fees");
  }
}
