import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CountryUtil } from '@angular-nx-ddd/shared/util-country';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'common-ui-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
  ],
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
