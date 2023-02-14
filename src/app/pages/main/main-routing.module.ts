import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes:Routes=[{
  path:'',
  component:MainComponent,
  children:[
{path:'clientes', loadChildren:()=>import('../empleados/clientes.module').then((m)=> m.ClientesModule)},
{path:'productos', loadChildren:()=>import('../productos/productos.module').then((m)=> m.ProductosModule)},
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
