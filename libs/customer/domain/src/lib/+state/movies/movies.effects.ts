import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MoviesActions from './movies.actions';
import { MoviesDataService } from '../../infrastructure/movies.data.service';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap((action) =>
        this.moviesDataService.load().pipe(
          map((movies) => MoviesActions.loadMoviesSuccess({ movies })),
          catchError((error) => of(MoviesActions.loadMoviesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesDataService: MoviesDataService
  ) {}
}
