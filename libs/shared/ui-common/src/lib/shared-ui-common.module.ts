import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostcodeInputComponent } from './components/postcode-input/postcode-input.component';
import {
  HomeOutline,
  FlagOutline,
  SmileOutline,
  MailOutline,
  StarOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular/types';
import { CountrySelectionModule } from './components/country-selection/country-selection.module';

const DECLARES_EXPORTS = [MainLayoutComponent, PostcodeInputComponent];
const IMPORTS_EXPORTS = [CountrySelectionModule];

const icons: IconDefinition[] = [
  FlagOutline,
  HomeOutline,
  SmileOutline,
  FlagOutline,
  MailOutline,
  StarOutline,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroModule,
    ReactiveFormsModule,
    NzIconModule.forRoot(icons),
    ...IMPORTS_EXPORTS,
  ],
  declarations: [...DECLARES_EXPORTS],
  exports: [...DECLARES_EXPORTS, ...IMPORTS_EXPORTS, NgZorroModule],
})
export class SharedUiCommonModule {}
