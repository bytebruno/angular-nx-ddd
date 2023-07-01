import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { CountrySelectionComponent } from './components/country-selection/country-selection.component';
import { ReactiveFormsModule } from '@angular/forms';

const DECLARES_EXPORTS = [MainLayoutComponent, CountrySelectionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroModule, ReactiveFormsModule],
  declarations: [...DECLARES_EXPORTS],
  exports: [...DECLARES_EXPORTS, NgZorroModule],
})
export class SharedUiCommonModule {}
