import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MainModule    
  ]
})
export class ProductosModule { }
