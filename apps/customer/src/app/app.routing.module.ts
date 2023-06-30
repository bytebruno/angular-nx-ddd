import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgModule } from '@angular/core';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'enter',
    pathMatch: 'full',
  },
  {
    path: 'enter',
    component: NxWelcomeComponent,
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
