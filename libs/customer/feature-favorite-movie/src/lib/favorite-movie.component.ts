import { Component, OnInit } from '@angular/core';
import { FavoriteMovieFacade } from '@angular-nx-ddd/customer/domain';

@Component({
  selector: 'customer-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss'],
})
export class FavoriteMovieComponent implements OnInit {
  moviesList$ = this.favoriteMovieFacade.moviesList$;

  constructor(private favoriteMovieFacade: FavoriteMovieFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.favoriteMovieFacade.load();
  }
}
