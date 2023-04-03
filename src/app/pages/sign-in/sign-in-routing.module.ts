import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard.guard';
const routes: Routes=[
  {path:'', 
  
  component:SignInComponent},
  
  {path:'sign-up',
  component:SignUpComponent}
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
