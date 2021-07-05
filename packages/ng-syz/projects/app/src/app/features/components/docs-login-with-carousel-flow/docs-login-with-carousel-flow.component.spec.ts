import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';

import { DocsLoginWithCarouselFlowComponent } from './docs-login-with-carousel-flow.component';

describe('DocsLoginWithCarouselFlowComponent', () => {
  let component: DocsLoginWithCarouselFlowComponent;
  let fixture: ComponentFixture<DocsLoginWithCarouselFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsLoginWithCarouselFlowComponent],
      imports: [SharedModule, NoopAnimationsModule],
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
