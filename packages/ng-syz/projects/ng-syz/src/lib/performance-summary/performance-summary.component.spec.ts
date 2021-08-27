import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgSyzPerformanceSummaryComponent } from './performance-summary.component';

describe('NgSyzPerformanceSummaryComponent', () => {
  let component: NgSyzPerformanceSummaryComponent;
  let fixture: ComponentFixture<NgSyzPerformanceSummaryComponent>;
  let template: HTMLElement;

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [NgSyzPerformanceSummaryComponent],
        imports: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzPerformanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
