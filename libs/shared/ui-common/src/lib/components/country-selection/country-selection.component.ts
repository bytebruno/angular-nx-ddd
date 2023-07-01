import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'common-ui-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.scss'],
})
export class CountrySelectionComponent {
  @Input() parentForm: FormGroup = new FormGroup({});

  get hasError() {
    return (
      this.parentForm.get('country')?.dirty &&
      this.parentForm.get('country')?.invalid
    );
  }

  countries: Country[] = [
    { name: 'Ireland', code: 'IE' },
    { name: 'United Kingdom', code: 'UK' },
  ];
}
