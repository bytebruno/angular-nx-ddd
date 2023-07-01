import { Component, OnInit } from '@angular/core';
import { FavoriteMovieFacade } from '@angular-nx-ddd/customer/domain';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.customerForm = this.fb.group({
      name: [null, [Validators.required]],
      userName: [null, [Validators.email]],
      country: [null, [Validators.required]],
    });

    this.customerForm.valueChanges.subscribe((newVal) => {
      console.log(newVal);
    });
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
