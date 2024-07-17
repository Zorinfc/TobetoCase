import { Component } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private service: LoginService, private router: Router) {}
  logOut() {
    this.service.logout();
    this.router.navigate(['login']);
  }
}
