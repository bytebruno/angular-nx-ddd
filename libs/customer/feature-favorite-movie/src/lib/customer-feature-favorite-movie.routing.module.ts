import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FavoriteMovieComponent } from './favorite-movie.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: FavoriteMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class CustomerFeatureFavoriteMovieRoutingModule {}
