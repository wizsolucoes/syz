import { TestBed } from '@angular/core/testing';
import { NgSyzLoginWithCarouselFlowComponent } from './login-with-carousel-flow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NgSyzLoginWithCarouselFlowComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [NgSyzLoginWithCarouselFlowComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(
      NgSyzLoginWithCarouselFlowComponent
    );
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
