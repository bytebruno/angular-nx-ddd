import { Country } from '@angular-nx-ddd/shared/util-country';
import { PostCodeUtil } from '@angular-nx-ddd/shared/util-post-code';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'common-ui-postcode-input',
  templateUrl: './postcode-input.component.html',
  styleUrls: ['./postcode-input.component.scss'],
})
export class PostcodeInputComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup | null = null;
  @Input() controlName = '';
  @Input() countryControlName = '';

  private formSubscription: Subscription | undefined = new Subscription();

  ngOnInit(): void {
    this.listenParentFormForCountryChanges();
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }

  listenParentFormForCountryChanges() {
    if (!this.parentForm) return;

    this.formSubscription = this.parentForm
      .get(this.countryControlName)
      ?.valueChanges.subscribe((country: Country | null) => {
        if (country === null) return;

        this.parentForm?.controls[this.controlName].setValidators(
          PostCodeUtil.getPostCodeValidators(country.code)
        );

        this.parentForm?.controls[this.controlName].updateValueAndValidity({
          onlySelf: true,
        });
      });
  }
}
