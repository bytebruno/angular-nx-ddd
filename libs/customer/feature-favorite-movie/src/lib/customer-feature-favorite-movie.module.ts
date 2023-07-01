import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDomainModule } from '@angular-nx-ddd/customer/domain';
import { FavoriteMovieComponent } from './favorite-movie.component';
import { CustomerFeatureFavoriteMovieRoutingModule } from './customer-feature-favorite-movie.routing.module';
import { SharedUiCommonModule } from '@angular-nx-ddd/shared/ui-common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  UserOutline,
  LockOutline,
  SmileOutline,
  FlagOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [
  UserOutline,
  LockOutline,
  SmileOutline,
  FlagOutline,
];

@NgModule({
  imports: [
    CommonModule,
    CustomerDomainModule,
    CustomerFeatureFavoriteMovieRoutingModule,
    SharedUiCommonModule,
    ReactiveFormsModule,
    NzIconModule.forChild(icons),
  ],
  declarations: [FavoriteMovieComponent],
  exports: [FavoriteMovieComponent],
})
export class CustomerFeatureFavoriteMovieModule {}
