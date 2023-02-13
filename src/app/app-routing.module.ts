import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { ClienteComponent } from './pages/empleados/cliente/cliente.component';
import { ClientesComponent } from './pages/empleados/clientes.component';
import { DeleteClienteComponent } from './pages/empleados/modal/delete-cliente/delete-clientes.component';

const routes:Routes=[
  // {path:'**', redirectTo:'/', pathMatch:'full'},
  {path:'', 
  // canActivate:[AuthGuard],
  component:ClientesComponent
},
  {path:'create',component:ClienteComponent},
  {path:'edit/:id' , component:ClienteComponent},
  {path:':id' , component:ClientesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
