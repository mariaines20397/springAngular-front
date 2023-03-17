import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
const routes: Routes=[
  // {path:'', component:ProductosComponent},
  {path:'sign-in',
  component:SignInComponent},
  {path:'sign-up',
  component:SignUpComponent}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
