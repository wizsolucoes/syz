import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsLoginWithCarouselFlowComponent } from './docs-login-with-carousel-flow.component';

describe('DocsLoginWithCarouselFlowComponent', () => {
  let component: DocsLoginWithCarouselFlowComponent;
  let fixture: ComponentFixture<DocsLoginWithCarouselFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsLoginWithCarouselFlowComponent],
      imports: [SharedTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsLoginWithCarouselFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
