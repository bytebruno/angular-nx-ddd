import { Component } from '@angular/core';
import { CustomerDataFacade } from '@angular-nx-ddd/customer/domain';

@Component({
  selector: 'customer-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent {
  customerData$ = this.customerDataFacade.getCustomerData$;
  constructor(private customerDataFacade: CustomerDataFacade) {}
}
