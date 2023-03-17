import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MainModule } from '../main/main.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    NgxPermissionsModule.forChild({
      configurationIsolate:false
    }),
    MainModule
  ]
})
export class ProductosModule { }
