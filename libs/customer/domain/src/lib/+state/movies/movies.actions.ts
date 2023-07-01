import { createAction, props } from '@ngrx/store';
import { Movies } from '../../entities/movies';

export const loadMovies = createAction('[Movies] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ movies: Movies[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ error: any }>()
);
