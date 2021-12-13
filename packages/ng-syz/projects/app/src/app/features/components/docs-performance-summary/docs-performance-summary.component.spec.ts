import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { NgSyzPerformanceSummaryModule } from 'projects/ng-syz/src/public-api';
import { DocsPerformanceSummaryComponent } from './docs-performance-summary.component';

describe('DocsPerformanceSummaryComponent', () => {
  let component: DocsPerformanceSummaryComponent;
  let fixture: ComponentFixture<DocsPerformanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsPerformanceSummaryComponent],
      imports: [NgSyzPerformanceSummaryModule, SharedTestingModule],
    }).compileComponents();
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
