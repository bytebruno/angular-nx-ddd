import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteMovieComponent } from './favorite-movie.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiCommonModule } from '@angular-nx-ddd/shared/ui-common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesAutocompleteComponent } from '../../components/movies-autocomplete/movies-autocomplete.component';
import { CountryCode } from '@angular-nx-ddd/shared/util-country';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { CustomerData } from '@angular-nx-ddd/customer/domain';

const minValidFormValues = {
  name: 'John',
  country: { name: 'Ireland', code: CountryCode.Ireland },
  userName: null,
  postCode: null,
  favoriteMovie: null,
};

const minValidCustomerDataValues: CustomerData = {
  name: 'John',
  country: 'Ireland',
  userName: null,
  favoriteMovie: null,
  postCode: null,
};

describe('FavoriteMovieComponent', () => {
  let component: FavoriteMovieComponent;
  let fixture: ComponentFixture<FavoriteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedUiCommonModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'thankyou', component: ThankYouComponent },
        ]),
      ],
      declarations: [
        FavoriteMovieComponent,
        MoviesAutocompleteComponent,
        ThankYouComponent,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteMovieComponent);
    component = fixture.componentInstance;

    jest
      .spyOn(component['router'], 'navigate')
      .mockImplementation(() => Promise.resolve(true));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set customer data when submit is pressed with a valid form', () => {
    const setCustomerDataSpy = jest.spyOn(
      component['customerDataFacade'],
      'setCustomerData'
    );
    component.customerForm.setValue(minValidFormValues);
    component.submitForm();

    expect(setCustomerDataSpy).toBeCalledWith(minValidCustomerDataValues);
  });

  it('should not set customer data when submit is pressed with an invalid form', () => {
    const setCustomerDataSpy = jest.spyOn(
      component['customerDataFacade'],
      'setCustomerData'
    );
    component.customerForm.setValue({ ...minValidFormValues, name: null });
    component.submitForm();

    expect(setCustomerDataSpy).not.toBeCalledWith(minValidCustomerDataValues);
  });

  it('should redirect to thankyou when submit is pressed with a valid form', () => {
    const routerSpy = jest.spyOn(component['router'], 'navigate');
    component.customerForm.setValue(minValidFormValues);
    component.submitForm();

    expect(routerSpy).toBeCalledWith(['thankyou']);
  });

  it('should not redirect to thankyou when submit is pressed with a invalid form', () => {
    const routerSpy = jest.spyOn(component['router'], 'navigate');
    component.customerForm.setValue({ ...minValidFormValues, name: null });
    component.submitForm();

    expect(routerSpy).not.toBeCalledWith(['thankyou']);
  });

  it('Name field should be required', () => {
    component.customerForm.setValue({ ...minValidFormValues, name: null });
    component.submitForm();

    expect(component.customerForm.controls['name'].hasError('required')).toBe(
      true
    );
  });

  it('Name field should not contain numbers', () => {
    component.customerForm.setValue({ ...minValidFormValues, name: 'J0h4n' });
    component.submitForm();

    expect(component.customerForm.controls['name'].hasError('pattern')).toBe(
      true
    );
  });

  it('Username field should be an email', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      userName: 'john',
    });
    component.submitForm();

    expect(component.customerForm.controls['userName'].hasError('email')).toBe(
      true
    );
  });

  it('Username field is an valid email', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      userName: 'john@email.com',
    });
    component.submitForm();

    expect(component.customerForm.controls['userName'].valid).toBe(true);
  });

  it('Username field is not required', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      userName: null,
    });
    component.submitForm();

    expect(component.customerForm.controls['userName'].valid).toBe(true);
  });

  it('Country field is required', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: null,
    });
    component.submitForm();

    expect(
      component.customerForm.controls['country'].hasError('required')
    ).toBe(true);
  });

  it('Favorite movie field is not required', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      favoriteMovie: null,
    });
    component.submitForm();

    expect(component.customerForm.controls['favoriteMovie'].valid).toBe(true);
  });
  it('Postcode should not be required when country is Ireland', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'Ireland', code: CountryCode.Ireland },
      postCode: null,
    });
    component.submitForm();

    expect(component.customerForm.controls['postCode'].valid).toBe(true);
  });
  it('Postcode minLength should be 6 when country is Ireland', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'Ireland', code: CountryCode.Ireland },
      postCode: '12345',
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('minlength')
    ).toBe(true);
  });

  it('Postcode minLength should be 6 when country is Ireland', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'Ireland', code: CountryCode.Ireland },
      postCode: '123456',
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('minlength')
    ).toBe(false);
  });

  it('Postcode maxLength should be 10 when country is Ireland', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'Ireland', code: CountryCode.Ireland },
      postCode: '12345678910',
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('maxlength')
    ).toBe(true);
  });

  it('Postcode maxLength should be 10 when country is Ireland', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'Ireland', code: CountryCode.Ireland },
      postCode: '123456789',
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('maxlength')
    ).toBe(false);
  });

  it('Postcode should be required when country is United Kingdom', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'United Kingdom', code: CountryCode.UnitedKingdom },
      postCode: null,
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('required')
    ).toBe(true);
  });

  it('Postcode must comply with UK_POST_CODE_REGEX when country is United Kingdom', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'United Kingdom', code: CountryCode.UnitedKingdom },
      postCode: '123 12',
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('pattern')
    ).toBe(true);
  });

  it('Postcode must comply with UK_POST_CODE_REGEX when country is United Kingdom', () => {
    component.customerForm.setValue({
      ...minValidFormValues,
      country: { name: 'United Kingdom', code: CountryCode.UnitedKingdom },
      postCode: 'SW1W 0NY',
    });
    component.submitForm();

    expect(
      component.customerForm.controls['postCode'].hasError('pattern')
    ).toBe(false);
  });
});
