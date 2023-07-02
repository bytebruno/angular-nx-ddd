import { Component, OnInit } from '@angular/core';
import { FavoriteMovieFacade } from '@angular-nx-ddd/customer/domain';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CountryCode } from '@angular-nx-ddd/shared/util-country';

@Component({
  selector: 'customer-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss'],
})
export class FavoriteMovieComponent implements OnInit {
  moviesList$ = this.favoriteMovieFacade.moviesList$;
  customerForm!: FormGroup;

  constructor(
    private favoriteMovieFacade: FavoriteMovieFacade,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.load();
    this.customerForm = new FormGroup(
      {
        name: new FormControl<string>('', {
          validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')],
        }),
        userName: new FormControl<string>('', {
          validators: [Validators.email],
        }),
        country: new FormControl<CountryCode | null>(null, {
          validators: [Validators.required],
          updateOn: 'change',
        }),
        postCode: new FormControl<string | null>(null),
      },
      { updateOn: 'submit' }
    );
  }

  load(): void {
    this.favoriteMovieFacade.load();
  }

  submitForm(): void {
    if (this.customerForm.valid) {
      console.log('submit', this.customerForm.value);
    } else {
      Object.values(this.customerForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
