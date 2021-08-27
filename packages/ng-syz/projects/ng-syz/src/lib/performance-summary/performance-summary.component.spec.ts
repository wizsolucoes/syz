import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgSyzPerformanceSummaryComponent } from './performance-summary.component';

describe('NgSyzPerformanceSummaryComponent', () => {
  let component: NgSyzPerformanceSummaryComponent;
  let fixture: ComponentFixture<NgSyzPerformanceSummaryComponent>;

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

  it('should return float value', () => {
    const floatvalue = 100;

    expect(component.calcPercent(floatvalue, floatvalue)).toEqual(floatvalue);
  });

});
