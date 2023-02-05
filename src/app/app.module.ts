import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadoComponent } from './pages/empleados/empleado/empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEmpleadoComponent } from './pages/empleados/modal/create-empleado/create-empleado.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditEmpleadoComponent } from './pages/empleados/modal/edit-empleado/edit-empleado.component';
import { DeleteEmpleadoComponent } from './pages/empleados/modal/delete-empleado/delete-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CreateEmpleadoComponent,
    EditEmpleadoComponent,
    DeleteEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
