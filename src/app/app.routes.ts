import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'login-register',
    loadComponent: () => import('./pages/login-register/login-register.page').then( m => m.LoginRegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
