import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { LoadPermissionsService } from '../load-permissions.service';

// export function permissionsFactory(loadPermissionsService: LoadPermissionsService,
//   ngxPermissionsService:NgxPermissionsService){
// return()=>{
//   return loadPermissionsService.loadPermissions().then((data)=>{
//     ngxPermissionsService.loadPermissions(data);
//     return true;
//   })
// }
// }


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgxPermissionsModule.forRoot()
  ],
  exports:[MainComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  // providers:[{
  //   provide: APP_INITIALIZER,
  //   useFactory: permissionsFactory,
  //   deps:[LoadPermissionsService, NgxPermissionsService],
  //   multi: true
  // }]
})
export class MainModule { }
