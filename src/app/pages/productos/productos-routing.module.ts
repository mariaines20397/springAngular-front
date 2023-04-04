import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';
import { RoleGuard } from 'src/app/core/guards/role-guard.guard';

const routes: Routes=[
{path:'', 
component:ProductosComponent},
{path:'create', 
canActivate:[RoleGuard],
data:{rol:'ROLE_ADMIN'},
component:ProductoComponent},
{path:'edit/:id' , 
canActivate:[RoleGuard],
data:{rol:'ROLE_ADMIN'},
component:ProductoComponent},
{path:':id' , 
component:ProductoComponent},
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductosRoutingModule { }
