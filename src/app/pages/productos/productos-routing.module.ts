import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes=[
{path:'', component:ProductosComponent},
{path:'create',component:ProductoComponent},
{path:'edit/:id' , component:ProductoComponent},
{path:':id' , component:ProductoComponent},
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductosRoutingModule { }
