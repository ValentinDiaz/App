import { Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    ...canActivate(() => redirectLoggedInTo(['home'])), // Redirige usuarios autenticados al home
  },
  {
    path: 'login-register',
    loadComponent: () => import('./pages/login-register/login-register.page').then(m => m.LoginRegisterPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
    ...canActivate(() => redirectUnauthorizedTo(['login'])), // Protege la ruta y redirige al login si no está autenticado
  },
];
