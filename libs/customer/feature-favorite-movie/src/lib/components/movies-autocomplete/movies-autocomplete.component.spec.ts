import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesAutocompleteComponent } from './movies-autocomplete.component';

describe('MoviesAutocompleteComponent', () => {
  let component: MoviesAutocompleteComponent;
  let fixture: ComponentFixture<MoviesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesAutocompleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
