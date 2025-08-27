import { Component } from '@angular/core';
import { CustomerDataFacade } from '@angular-nx-ddd/customer/domain';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'customer-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  standalone: true,
  imports: [CommonModule, NzCardModule],
})
export class ThankYouComponent {
  customerData$ = this.customerDataFacade.getCustomerData$;
  constructor(private customerDataFacade: CustomerDataFacade) {}
}
