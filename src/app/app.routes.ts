import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/routes';
import { homeRoutes } from './features/home/routes';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { blogRoutes } from './features/blogs/routes';

export const routes: Routes = [
  ...homeRoutes,
  ...authRoutes,
  ...blogRoutes,
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
