import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostcodeInputComponent } from './postcode-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Country, CountryCode } from '@angular-nx-ddd/shared/util-country';
import { SharedUiCommonModule } from '../../shared-ui-common.module';
import { PostCodeUtil } from '@angular-nx-ddd/shared/util-post-code';

describe('PostcodeInputComponent', () => {
  let component: PostcodeInputComponent;
  let fixture: ComponentFixture<PostcodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, SharedUiCommonModule],
      declarations: [PostcodeInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostcodeInputComponent);
    component = fixture.componentInstance;

    component.parentForm = new FormGroup({
      country: new FormControl<Country | null>(null),
      postCode: new FormControl<string | null>(null),
    });

    component.countryControlName = 'country';
    component.controlName = 'postCode';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listenParentFormForCountryChanges once in OnInit', () => {
    const subscriptionSpy = jest.spyOn(
      component,
      'listenParentFormForCountryChanges'
    );
    component.ngOnInit();
    expect(subscriptionSpy).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe in OnDestroy', () => {
    const subscriptionSpy = jest.spyOn(
      component['formSubscription'],
      'unsubscribe'
    );
    component.ngOnDestroy();

    expect(subscriptionSpy).toHaveBeenCalledTimes(1);
  });

  it('should change validators when Country value changes', () => {
    const setValidatorsSpy = jest.spyOn(
      component.parentForm.controls[component.controlName],
      'setValidators'
    );
    const getValidatorsSpy = jest.spyOn(PostCodeUtil, 'getPostCodeValidators');
    const country: Country = { code: CountryCode.Ireland, name: 'Ireland' };
    component.parentForm.controls[component.countryControlName].setValue(
      country
    );
    expect(setValidatorsSpy).toHaveBeenCalledTimes(1);
    expect(getValidatorsSpy).toHaveBeenCalledWith(country.code);
  });

  it("should not change validators when Country value doens't change", () => {
    const setValidatorsSpy = jest.spyOn(
      component.parentForm.controls[component.controlName],
      'setValidators'
    );

    expect(setValidatorsSpy).not.toHaveBeenCalled();
  });

  it('should not change validators if Country value is null', () => {
    const setValidatorsSpy = jest.spyOn(
      component.parentForm.controls[component.controlName],
      'setValidators'
    );
    component.parentForm.controls[component.countryControlName].setValue(null);
    expect(setValidatorsSpy).not.toHaveBeenCalled();
  });
});
