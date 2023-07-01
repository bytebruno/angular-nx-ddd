import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MoviesActions from './movies.actions';
import { Movies } from '../../entities/movies';

export const MOVIES_FEATURE_KEY = 'customer-movies';

export interface State extends EntityState<Movies> {
  selectedId?: string | number; // which Movies record has been selected
  loaded: boolean; // has the Movies list been loaded
  error?: string | null; // last known error (if any)
}

export interface MoviesPartialState {
  readonly [MOVIES_FEATURE_KEY]: State;
}

export const moviesAdapter: EntityAdapter<Movies> =
  createEntityAdapter<Movies>();

export const initialState: State = moviesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const moviesReducer = createReducer(
  initialState,
  on(MoviesActions.loadMovies, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) =>
    moviesAdapter.upsertMany(movies, { ...state, loaded: true })
  ),
  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return moviesReducer(state, action);
}
