import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // {
  //   path: 'not-found-404',
  //   component: NotFoundComponent
  // },
   {
     path: '',
     component: AppComponent
   },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
