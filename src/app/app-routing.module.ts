import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';
import { AuthService } from './shared';
import { PreloadSelectedModules } from './selective-preload-strategy';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthService]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
