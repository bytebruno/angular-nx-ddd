import { FavoriteMovieFacade, Movie } from '@angular-nx-ddd/customer/domain';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

@Component({
  selector: 'customer-movies-autocomplete',
  templateUrl: './movies-autocomplete.component.html',
  styleUrls: ['./movies-autocomplete.component.scss'],
})
export class MoviesAutocompleteComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup | null = null;
  @Input() controlName = '';
  moviesList$ = this.favoriteMovieFacade.moviesList$;
  searchForm: FormGroup | null = null;
  inputSubscription: Subscription = new Subscription();

  constructor(private favoriteMovieFacade: FavoriteMovieFacade) {}

  ngOnInit(): void {
    this._initializeComponent();
  }

  ngOnDestroy(): void {
    this.inputSubscription?.unsubscribe();
  }

  onBlur(): void {
    if (this.searchForm?.controls['search'].value?.length === 0) {
      this._setValueOnParentForm(null);
    }
  }

  onSelect(movie: Movie): void {
    this._setValueOnParentForm(movie);
  }

  _initializeComponent(): void {
    if (!this.parentForm) return;

    this.searchForm = new FormGroup({
      search: new FormControl<string>(''),
    });

    this.inputSubscription = this.searchForm.controls['search'].valueChanges
      .pipe(
        filter((term) => term.length > 2),
        debounceTime(300),
        distinctUntilChanged(),
        map((term) => {
          this.favoriteMovieFacade.search(term);
        })
      )
      .subscribe();
  }

  _setValueOnParentForm(movie: Movie | null) {
    this.parentForm?.controls[this.controlName].setValue(movie);
  }
}
