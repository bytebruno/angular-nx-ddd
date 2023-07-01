import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainLayoutComponent } from '@angular-nx-ddd/shared/ui-common';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'enter',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'enter',
        loadChildren: () =>
          import('@angular-nx-ddd/customer/feature-favorite-movie').then(
            (m) => m.CustomerFeatureFavoriteMovieModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'enter',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
