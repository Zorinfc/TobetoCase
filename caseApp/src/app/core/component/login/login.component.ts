import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  loginForm = this.builder.nonNullable.group({
    userName: 'a',
    password: '1234',
  });

  login() {
    let username = this.loginForm.get('userName')!.value;
    let password = this.loginForm.get('password')!.value;

    this.service.login(username, password).subscribe({
      next: (data) => {
        this.router.navigate(['menu']);
        this.toastr.success('Username & Password Correct');
      },
      error: (err) => {
        this.toastr.error('Username or Password Incorrect');
      },
    });
  }
}
