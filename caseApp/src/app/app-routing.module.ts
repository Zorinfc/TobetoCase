import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { ErrorComponent } from './core/component/error/error.component';
import { LoginComponent } from './core/component/login/login.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { loginGuard } from './core/guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [loginGuard()],
    children: [
      {
        path: 'label',
        loadChildren: () =>
          import('./core/module/label/label.module').then((m) => m.LabelModule),
      },
      {
        path: 'tag',
        loadChildren: () =>
          import('./core/module/tag/tag.module').then((m) => m.TagModule),
      },
    ],
  },
  { path: '**', component: ErrorComponent, title: 'Error occured' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
