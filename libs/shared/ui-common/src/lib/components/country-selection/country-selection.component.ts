import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CountryUtil } from '@angular-nx-ddd/shared/util-country';

@Component({
  selector: 'common-ui-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.scss'],
})
export class CountrySelectionComponent {
  @Input() parentForm: FormGroup | null = null;
  @Input() controlName = '';
  countries = CountryUtil.countries;

  get hasError() {
    return (
      this.parentForm?.get(this.controlName)?.touched &&
      this.parentForm?.get(this.controlName)?.invalid
    );
  }
}
