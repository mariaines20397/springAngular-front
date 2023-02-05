import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './pages/empleados/empleado/empleado.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DeleteEmpleadoComponent } from './pages/empleados/modal/delete-empleado/delete-empleado.component';

const routes:Routes=[
  // {path:'**', redirectTo:'/', pathMatch:'full'},
  {path:'', component:EmpleadosComponent},
  {path:'create',component:EmpleadoComponent},
  {path:'edit/:id' , component:EmpleadoComponent},
  {path:':id' , component:EmpleadosComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
