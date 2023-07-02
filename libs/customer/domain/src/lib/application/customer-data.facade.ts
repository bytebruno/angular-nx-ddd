import { Injectable } from '@angular/core';
import { CustomerDataService } from '../infrastructure/customer.data.service';
import { CustomerData } from '../entities/customer-data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerDataFacade {
  constructor(private customerDataService: CustomerDataService) {}

  setCustomerData(customerData: CustomerData): void {
    this.customerDataService.setCustomerData(customerData);
  }

  get getCustomerData$(): Observable<CustomerData | null> {
    return this.customerDataService.getCustomerData();
  }
}
