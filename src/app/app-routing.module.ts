import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes:Routes=[
  {
  path:'',
  loadChildren:()=> import('./pages/sign-in/sign-in.module').then((m)=> m.SignInModule)
 },
 {
  path:'main',
  loadChildren:()=> import('./pages/main/main.module').then((m)=> m.MainModule)
 }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
