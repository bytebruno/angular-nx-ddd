import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThankYouComponent } from './thank-you.component';
import { of } from 'rxjs';
import { CustomerData } from '@angular-nx-ddd/customer/domain';
import { SharedUiCommonModule } from '@angular-nx-ddd/shared/ui-common';
import { By } from '@angular/platform-browser';

describe.only('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCommonModule],
      declarations: [ThankYouComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show card only if has customer data', () => {
    component.customerData$ = of<CustomerData>({
      name: 'John',
      userName: 'john@email.com',
      country: 'Ireland',
      postCode: '123 21',
      favoriteMovie: 'LOTR',
    });

    fixture.detectChanges();

    const userCard = fixture.debugElement.query(By.css('.customer-data-card'));
    expect(userCard).not.toBeNull();
  });

  it('should hide card only if has no customer data', () => {
    component.customerData$ = of(null);
    fixture.detectChanges();
    const userCard = fixture.debugElement.query(By.css('.customer-data-card'));
    expect(userCard).toBeNull();
  });
});
