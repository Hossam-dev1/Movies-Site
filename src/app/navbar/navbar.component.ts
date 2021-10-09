import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
    isLogin: boolean = false;

    constructor(private _AuthService: AuthService) {


        _AuthService.currentUserData.subscribe(() => {

            if (_AuthService.currentUserData.getValue() == null) {
                this.isLogin = false;
            }
            else {
                this.isLogin = true
            }


        })

    }



        logout()
        {
            this._AuthService.logout();
        }

}