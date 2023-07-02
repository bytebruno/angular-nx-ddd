import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CustomerData } from '../entities/customer-data';

@Injectable({ providedIn: 'root' })
export class CustomerDataService {
  private customerDataBehaviorSubject =
    new BehaviorSubject<CustomerData | null>(null);

  setCustomerData(customerData: CustomerData): void {
    this.customerDataBehaviorSubject.next(customerData);
  }

  getCustomerData(): Observable<CustomerData | null> {
    return this.customerDataBehaviorSubject.asObservable();
  }
}
