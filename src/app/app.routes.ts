import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/routes';
import { homeRoutes } from './features/home/routes';
import { blogRoutes } from './features/blogs/routes';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

export const routes: Routes = [
  ...homeRoutes,
  ...authRoutes,
  ...blogRoutes,
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
