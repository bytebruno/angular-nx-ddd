import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'common-ui-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class MainLayoutComponent {}
