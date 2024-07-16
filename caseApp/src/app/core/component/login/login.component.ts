import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private service: LoginService,
    private router: Router
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
        console.log('giris basarili');
        this.router.navigate(['menu']);
      },
      error: (err) => {
        console.log('hata');
      },
    });
  }
}
