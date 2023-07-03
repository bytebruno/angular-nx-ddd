import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesAutocompleteComponent } from './movies-autocomplete.component';
import { provideMockStore } from '@ngrx/store/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedUiCommonModule } from '@angular-nx-ddd/shared/ui-common';
import { Movie } from '@angular-nx-ddd/customer/domain';

describe('MoviesAutocompleteComponent', () => {
  let component: MoviesAutocompleteComponent;
  let fixture: ComponentFixture<MoviesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SharedUiCommonModule],
      declarations: [MoviesAutocompleteComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesAutocompleteComponent);
    component = fixture.componentInstance;

    component.searchForm = new FormGroup({
      search: new FormControl<string>(''),
    });

    component.parentForm = new FormGroup({
      favoriteMovie: new FormControl<Movie | null>(null),
    });

    component.controlName = 'favoriteMovie';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call _initializeComponent once in OnInit', () => {
    const subscriptionSpy = jest.spyOn(component, '_initializeComponent');
    component.ngOnInit();
    expect(subscriptionSpy).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe in OnDestroy', () => {
    const subscriptionSpy = jest.spyOn(
      component.inputSubscription,
      'unsubscribe'
    );
    component.ngOnDestroy();

    expect(subscriptionSpy).toHaveBeenCalledTimes(1);
  });

  it('should set null on parentForm if input is empty onBlur', () => {
    const setValueSpy = jest.spyOn(component, '_setValueOnParentForm');
    const parentFormSpy = jest.spyOn(
      component.parentForm.controls[component.controlName],
      'setValue'
    );

    component.searchForm.controls['search'].setValue('');
    component.onBlur();

    expect(setValueSpy).toBeCalledWith(null);
    expect(parentFormSpy).toBeCalledWith(null);
  });

  it('should not set null on parentForm if input is filled onBlur', () => {
    const setValueSpy = jest.spyOn(component, '_setValueOnParentForm');
    const parentFormSpy = jest.spyOn(
      component.parentForm.controls[component.controlName],
      'setValue'
    );

    component.searchForm.controls['search'].setValue('hello');
    component.onBlur();

    expect(setValueSpy).not.toBeCalledWith(null);
    expect(parentFormSpy).not.toBeCalledWith(null);
  });

  it('should set the movie on parentForm onSelect', () => {
    const setValueSpy = jest.spyOn(component, '_setValueOnParentForm');
    const parentFormSpy = jest.spyOn(
      component.parentForm.controls[component.controlName],
      'setValue'
    );

    const movie: Movie = {
      Title: 'Movie 1',
      imdbID: '123',
      Poster: 'some_link',
      Type: 'movie',
      Year: '2002',
    };

    component.onSelect(movie);
    fixture.detectChanges();

    expect(setValueSpy).toBeCalledWith(movie);
    expect(parentFormSpy).toBeCalledWith(movie);
  });
});
