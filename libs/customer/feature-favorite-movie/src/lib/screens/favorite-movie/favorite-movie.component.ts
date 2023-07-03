import { Component, OnInit } from '@angular/core';
import {
  CustomerData,
  CustomerDataFacade,
  Movie,
} from '@angular-nx-ddd/customer/domain';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '@angular-nx-ddd/shared/util-country';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss'],
})
export class FavoriteMovieComponent implements OnInit {
  customerForm: FormGroup | null = null;

  constructor(
    private router: Router,
    private customerDataFacade: CustomerDataFacade
  ) {}

  ngOnInit() {
    this._initializeForm();
  }

  submitForm(): void {
    if (!this.customerForm) return;

    if (this.customerForm.valid) {
      this.customerDataFacade.setCustomerData(this._mapFormToCustomerData());
      this.router.navigate(['thankyou']);
    } else {
      Object.values(this.customerForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  _initializeForm(): void {
    this.customerForm = new FormGroup(
      {
        name: new FormControl<string>('', {
          validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')],
        }),
        userName: new FormControl<string>('', {
          validators: [Validators.email],
        }),
        country: new FormControl<Country | null>(null, {
          validators: [Validators.required],
          updateOn: 'change',
        }),
        postCode: new FormControl<string | null>(null),
        favoriteMovie: new FormControl<Movie | null>(null, {
          updateOn: 'change',
        }),
      },
      { updateOn: 'submit' }
    );
  }

  _mapFormToCustomerData(): CustomerData {
    return {
      name: this.customerForm?.value.name,
      userName: this.customerForm?.value.userName,
      country: this.customerForm?.value.country.name,
      postCode: this.customerForm?.value.postCode,
      favoriteMovie: this.customerForm?.value.favoriteMovie?.Title || null,
    };
  }
}
