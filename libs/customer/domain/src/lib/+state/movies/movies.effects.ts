import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MoviesActions from './movies.actions';
import { MoviesDataService } from '../../infrastructure/movies.data.service';
import { LoadMovieRes } from '../../entities/dto/loadMovieRes';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.loadMovies),
      switchMap((action) =>
        this.moviesDataService.load(action.search).pipe(
          map((res: LoadMovieRes) => {
            if (res.Response === 'True') {
              return MoviesActions.loadMoviesSuccess({ movies: res.Search });
            }
            return MoviesActions.loadMoviesFailure({
              error: 'Movie not found',
            });
          }),
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
