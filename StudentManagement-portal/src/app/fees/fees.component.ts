import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  readonly rootURL = 'https://localhost:44364/api';
  result: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  feeFormGroup: FormGroup;
  ngOnInit(): void {
    this.feeFormGroup = this.formBuilder.group({
      studentId: ["", Validators.required],
      feeAmount: ["", Validators.required],
      totalFees: ["", Validators.required],
      installment: ["", Validators.required],
    });
  }
  date = new Date();
  addFee() {
    console.log(this.date)
    console.log(this.feeFormGroup.value);
    this.http.post(this.rootURL + '/fees', {
      studentId: this.feeFormGroup.controls.studentId.value,
      feesPaid: this.feeFormGroup.controls.feeAmount.value,
      totalFees: this.feeFormGroup.controls.totalFees.value,
      dateofFeePaid: this.date,
      installment: this.feeFormGroup.controls.installment.value
    }).subscribe(res => {
      this.result = res;
      console.log(this.result);
    })
    
    this.router.navigateByUrl("");
  }
}
