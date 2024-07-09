import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegisterViewComponent } from './views/register-view/register-view.component';

export const authRoutes = [
  { path: 'auth/login', title: 'Login page app', component: LoginViewComponent },
  {
    path: 'auth/register',
    title: 'Register page app',
    component: RegisterViewComponent,
  },
];
