import * as fromMovies from './+state/movies/movies.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesEffects } from './+state/movies/movies.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMovies.MOVIES_FEATURE_KEY, fromMovies.reducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class CustomerDomainModule {}
