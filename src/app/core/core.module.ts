import { ModuleWithProviders, NgModule, Optional, RendererFactory2, SkipSelf, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsConfigurationService, NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild({
      configurationIsolate: false
    })
  ],
  exports:[NgxPermissionsModule]
})

// export class ForChildCoreModule {
//   @ViewChild('someInput') someInput!: TemplateRef<any>;

//   constructor(private ngxPermissionsConfigurationService: NgxPermissionsConfigurationService,
//               private rendererFactory: RendererFactory2) {
//     const renderer = this.rendererFactory.createRenderer(null, null);
//     this.ngxPermissionsConfigurationService.addPermissionStrategy('disable',
//       () => {
//         renderer.setAttribute(this.someInput.elementRef.nativeElement.nextSibling,
//           'disabled', 'true');
//       });
//     ngxPermissionsConfigurationService.setDefaultOnUnauthorizedStrategy('disable');

//     // const result=this.ngxPermissionsConfigurationService.getStrategy('disabled');
//     //   console.log(result);
//   }
// }

export class CoreModule { 
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'CoreModule is already loaded. Import it in the AppModule only');
  //   }
  // }

  // static forRoot(): ModuleWithProviders<any>  {
  //   return {
  //     ngModule: CoreModule
  //   };
  // }

  // static forChild(): ModuleWithProviders<any> {
  //   return {
  //     ngModule: ForChildCoreModule
  //   };
  // }
}
