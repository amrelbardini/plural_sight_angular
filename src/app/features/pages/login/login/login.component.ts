import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      admin: ['', Validators.required],
    });
  }
  loginForm!: FormGroup;
  hideLoginForm:boolean=false;

  login() {
    if (this.loginForm.valid) {
      this.authService.username = this.loginForm.value.username;
      this.authService.userRole = this.loginForm.value.admin
        ? 'admin'
        : 'non-admin';
      this.authService.userLoggedIn.next(true);
      this.hideLoginForm=true;

      const userObj = {
        username: this.loginForm.value.username,
        role: this.loginForm.value.admin ? 'admin' : 'non-admin',
      };

      this.authService.userInfo.next(userObj);

      setTimeout(() => {
        console.log(this.authService.redirectUrl.getValue());
        this.router.navigate([this.authService.redirectUrl.getValue()]);
      }, 1000);
    } else {
      this.hideLoginForm=true;
      alert('Form is not valid!');
    }
  }
}
