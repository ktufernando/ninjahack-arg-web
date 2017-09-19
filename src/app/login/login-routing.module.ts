import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService }          from '../shared/oAuth/auth.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginRoutingModule {}
