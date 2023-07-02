import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCardModule } from 'ng-zorro-antd/card';

const IMPORTS_EXPORTS = [
  NzGridModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzIconModule,
  NzSelectModule,
  NzAutocompleteModule,
  NzCardModule,
];

@NgModule({
  imports: IMPORTS_EXPORTS,
  exports: IMPORTS_EXPORTS,
})
export class NgZorroModule {}
