import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule {
}
