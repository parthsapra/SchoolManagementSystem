import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailAddComponent } from './student-detail-add/student-detail-add.component';
import { GardianDetailAddComponent } from './gardian-detail-add/gardian-detail-add.component';
import { FeesComponent } from './fees/fees.component';
import { AdmissionComponent } from './admission/admission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentDetailAddComponent,
    GardianDetailAddComponent,
    FeesComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
