import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MOVIES_FEATURE_KEY,
  State,
  MoviesPartialState,
  moviesAdapter,
} from './movies.reducer';

// Lookup the 'Movies' feature state managed by NgRx
export const getMoviesState = createFeatureSelector<MoviesPartialState, State>(
  MOVIES_FEATURE_KEY
);

const { selectAll, selectEntities } = moviesAdapter.getSelectors();

export const getMoviesLoaded = createSelector(
  getMoviesState,
  (state: State) => state.loaded
);

export const getMoviesError = createSelector(
  getMoviesState,
  (state: State) => state.error
);

export const getAllMovies = createSelector(getMoviesState, (state: State) =>
  selectAll(state)
);

export const getMoviesEntities = createSelector(
  getMoviesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMoviesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getMoviesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
