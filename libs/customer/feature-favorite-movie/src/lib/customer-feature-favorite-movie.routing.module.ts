import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FavoriteMovieComponent } from './screens/favorite-movie/favorite-movie.component';
import { ThankYouComponent } from './screens/thank-you/thank-you.component';

export const APP_ROUTES: Routes = [
  {
    path: 'enter',
    component: FavoriteMovieComponent,
  },
  {
    path: 'thankyou',
    component: ThankYouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class CustomerFeatureFavoriteMovieRoutingModule {}
