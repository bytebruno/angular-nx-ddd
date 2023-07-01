import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDomainModule } from '@angular-nx-ddd/customer/domain';
import { FavoriteMovieComponent } from './favorite-movie.component';
import { CustomerFeatureFavoriteMovieRoutingModule } from './customer-feature-favorite-movie.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerDomainModule,
    CustomerFeatureFavoriteMovieRoutingModule,
  ],
  declarations: [FavoriteMovieComponent],
  exports: [FavoriteMovieComponent],
})
export class CustomerFeatureFavoriteMovieModule {}
