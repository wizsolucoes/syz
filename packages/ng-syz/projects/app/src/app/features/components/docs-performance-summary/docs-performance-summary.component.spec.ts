import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzPerformanceSummaryModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';
import { DocsPerformanceSummaryComponent } from './docs-performance-summary.component';

describe('DocsPerformanceSummaryComponent', () => {
  let component: DocsPerformanceSummaryComponent;
  let fixture: ComponentFixture<DocsPerformanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsPerformanceSummaryComponent],
      imports: [
        NgSyzPerformanceSummaryModule,
        SharedModule,
        NoopAnimationsModule,
      ],
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
