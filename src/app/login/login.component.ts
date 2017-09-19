import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService }      from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent {
    private authServerBaseUrl = 'http://localhost:5000';
    private authCallbaclUrl = 'http://localhost:4200/';
    private config = {
        "loginRoute":"login",
        "facebook":{
            "authEndpoint": this.authServerBaseUrl+"/auth/facebook",
            "clientId":"2057175457853614",
            "redirectURI" : this.authCallbaclUrl
        },
        "google":{
            "authEndpoint": this.authServerBaseUrl+"/auth/google",
            "clientId":"487554491038-dh88rn74pug8ce40mbef6c75iigsahjt.apps.googleusercontent.com",
            "redirectURI" : this.authCallbaclUrl
        }
    };
    
    constructor(public authService: AuthService) {
    }
    facebookLogin(){
       this.authService.auth('facebook',this.config);
    }
    googleLogin(){
       this.authService.auth('google',this.config);
    } 
 }
 
