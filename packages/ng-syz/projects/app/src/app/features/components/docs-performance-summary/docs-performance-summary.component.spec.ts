import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsPerformanceSummaryComponent } from './docs-performance-summary.component';

describe('DocsPerformanceSummaryComponent', () => {
  let component: DocsPerformanceSummaryComponent;
  let fixture: ComponentFixture<DocsPerformanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsPerformanceSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsPerformanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
