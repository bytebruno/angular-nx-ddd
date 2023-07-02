import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadMovies } from '../+state/movies/movies.actions';
import * as fromMovies from '../+state/movies/movies.reducer';
import * as MoviesSelectors from '../+state/movies/movies.selectors';

@Injectable({ providedIn: 'root' })
export class FavoriteMovieFacade {
  moviesList$ = this.store.pipe(select(MoviesSelectors.getAllMovies));

  constructor(private store: Store<fromMovies.MoviesPartialState>) {}

  search(search: string): void {
    this.store.dispatch(loadMovies({ search }));
  }
}
