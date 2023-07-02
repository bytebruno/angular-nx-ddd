import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostcodeInputComponent } from './postcode-input.component';

describe('PostcodeInputComponent', () => {
  let component: PostcodeInputComponent;
  let fixture: ComponentFixture<PostcodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcodeInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostcodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
