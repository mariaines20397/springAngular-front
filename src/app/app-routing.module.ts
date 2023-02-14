import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes:Routes=[
  {
  path:'',
  loadChildren:()=> import('./pages/main/main.module').then((m)=> m.MainModule)
 }
//  {
//   path:'**',
//   loadChildren:()=> import().then((m)=> m.MainModule)
//  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
