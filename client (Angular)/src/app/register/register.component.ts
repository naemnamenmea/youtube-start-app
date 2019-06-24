import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../_services';
import { RegUser } from '../_models/reg-user/reg-user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [/*Validators.required*//*, Validators.minLength(6)*/]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    var user: RegUser = {
      UserName: this.registerForm.controls.username.value,
      Password: this.registerForm.controls.password.value,
      PasswordConfirmation: this.registerForm.controls.password.value
    };
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login'], { queryParams: { registered: true } });
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}