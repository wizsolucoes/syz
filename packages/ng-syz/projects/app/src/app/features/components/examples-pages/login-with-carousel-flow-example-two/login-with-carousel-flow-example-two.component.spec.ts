import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithCarouselFlowExampleTwoComponent } from './login-with-carousel-flow-example-two.component';

describe('LoginWithCarouselFlowExampleTwoComponent', () => {
  let component: LoginWithCarouselFlowExampleTwoComponent;
  let fixture: ComponentFixture<LoginWithCarouselFlowExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithCarouselFlowExampleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCarouselFlowExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
