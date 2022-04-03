import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponentComponent } from './student-component/student-component.component';
import { BasicInfoComponentComponent } from './basic-info-component/basic-info-component.component';
import { AddressInfoComponentComponent } from './address-info-component/address-info-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: StudentComponentComponent },
  { path: 'students', component: BasicInfoComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    BasicInfoComponentComponent,
    AddressInfoComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
