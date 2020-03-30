import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailAddComponent } from './student-detail-add/student-detail-add.component';
import { GardianDetailAddComponent } from './gardian-detail-add/gardian-detail-add.component';
import { FeesComponent } from './fees/fees.component';
import { AdmissionComponent } from './admission/admission.component';


const routes: Routes = [
  {path:"",component:AdmissionComponent},
  {path:"studentAdd",component:StudentAddComponent},
  {path:"addStudentDetail",component:StudentDetailAddComponent},
  {path:"addGardianDetail",component:GardianDetailAddComponent},
  {path:"fees",component:FeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
