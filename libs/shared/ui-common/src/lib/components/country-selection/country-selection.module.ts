import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectionComponent } from './country-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroModule,
    CountrySelectionComponent,
  ],
  declarations: [],
  exports: [CountrySelectionComponent],
})
export class CountrySelectionModule {}
