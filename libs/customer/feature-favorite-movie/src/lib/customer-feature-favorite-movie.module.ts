import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDomainModule } from '@angular-nx-ddd/customer/domain';
import { FavoriteMovieComponent } from './favorite-movie.component';
import { CustomerFeatureFavoriteMovieRoutingModule } from './customer-feature-favorite-movie.routing.module';
import { SharedUiCommonModule } from '@angular-nx-ddd/shared/ui-common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomerDomainModule,
    CustomerFeatureFavoriteMovieRoutingModule,
    SharedUiCommonModule,
    ReactiveFormsModule,
  ],
  declarations: [FavoriteMovieComponent],
  exports: [FavoriteMovieComponent],
})
export class CustomerFeatureFavoriteMovieModule {}
