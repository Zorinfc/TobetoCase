import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../service/login.service';

export function loginGuard(): CanActivateFn {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let service = inject(LoginService);
    let router = inject(Router);
    let result = service.tokenControl();

    if (!result) {
      router.navigate(['./login']);
      localStorage.clear();
    }

    return result;
  };
}
