import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }
  feeFormGroup: FormGroup;
  ngOnInit(): void {
    this.feeFormGroup = this.formBuilder.group({
      studentId: ["", Validators.required],
      feeAmount: ["", Validators.required],
      totalfees: ["", Validators.required],
      installment: ["", Validators.required],
    });
  }
  addFee() {
console.log(this.feeFormGroup.value);
this.router.navigateByUrl("");
  }
}
