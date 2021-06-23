import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithCarouselFlowExampleOneComponent } from './login-with-carousel-flow-example-one.component';

describe('LoginWithCarouselFlowExampleOneComponent', () => {
  let component: LoginWithCarouselFlowExampleOneComponent;
  let fixture: ComponentFixture<LoginWithCarouselFlowExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithCarouselFlowExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCarouselFlowExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
