import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

const IMPORTS_EXPORTS = [NzGridModule];

@NgModule({
  imports: IMPORTS_EXPORTS,
  exports: IMPORTS_EXPORTS,
})
export class NgZorroModule {}
