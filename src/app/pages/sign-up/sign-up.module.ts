import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainModule } from '../main/main.module';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    NgbToastModule 
  ]
})
export class SignUpModule { }
