import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrySelectionComponent } from './country-selection.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Country } from '@angular-nx-ddd/shared/util-country';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountrySelectionComponent', () => {
  let component: CountrySelectionComponent;
  let fixture: ComponentFixture<CountrySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NgZorroModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
      ],
      declarations: [CountrySelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountrySelectionComponent);
    component = fixture.componentInstance;

    component.parentForm = new FormGroup({
      country: new FormControl<Country | null>(null),
    });

    component.controlName = 'country';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
