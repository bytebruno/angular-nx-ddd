import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class SharedUiCommonModule {}
