import { Component, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NgxPermissionsConfigurationService, NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { PermissionService } from 'src/app/core/services/permissions.service';
import { LoadPermissionsService } from '../load-permissions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  @Input() permissions?:string[]
  @ViewChild('someInput') someInput!: TemplateRef<any>;
  // permission: string[] = ['GUEST'];
  roles = ['GUEST', 'DEVELOPER'];
  rolePermissions = {
    Guest: ['GUEST'],
    Developer: ['DEVELOPER'],    
};
permissions$ = this.ps.permissions$;
    roles$ = this.rs.roles$;

  constructor(
    private ps: NgxPermissionsService, 
    private rs: NgxRolesService,
    private permissionServices:PermissionService){
    }
    ngOnInit() {
    }
  

    addRole(role: string) {
      this.permissionServices.getAllPermissions().forEach(data=>{
        if (data.profile == role) {
          this.ps.loadPermissions(data.permissions);
            localStorage.setItem('permissions', JSON.stringify(data.permissions))
            
          
        }
      })
      // this.roles.forEach(r => this.rs.removeRole(r));
      // switch (role) {
      //     case 'Guest':
      //     case 'Developer':
      //         const permissions = this.rolePermissions[role];
      //         if (permissions) {
      //           console.log(permissions);
                
      //             this.ps.loadPermissions(permissions);
      //             this.rs.addRole(role, permissions);
      //         }
      //         // this.router.navigate(['/']);
      //         break;
      //     default:
      //         break;
      // }
  }
  
}
