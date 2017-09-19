import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../oAuth/profile.interface';
import { AuthService }      from '../../oAuth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private user:User = new User();

    pushRightClass: string = 'push-right';
    
    constructor(private translate: TranslateService, public router: Router, private authService: AuthService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.getUserProfile();
    }

    getUserProfile() {
        
        this.authService.getProfile().subscribe(
                                profile => {
                                    console.log(profile);
                                    console.log(this.user = new User(profile._id, profile.displayName, profile.email, profile.picture,profile.provider,profile.provider_id));
                                    //this.

                                }, 
                                err => {
                                    console.log(err);
                                });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.authService.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
