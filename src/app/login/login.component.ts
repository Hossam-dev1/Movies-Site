import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  error: string = "";

  loginForm: any = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-z0-9]{3,10}$')]),

  });


  submitForm(loginForm: any) {


    if (loginForm.valid) {


      this._AuthService.login(loginForm.value).subscribe((response) => {

        if (response.message === "success") {
        
          localStorage.setItem("currentUser", response.token);

          this._AuthService.saveCurrentUserData();
          this._Router.navigate(['/home']);
        }
        else {
          this.error = response.message;
        }
      })

    }
  }

  ngOnInit(): void {
  }

}
