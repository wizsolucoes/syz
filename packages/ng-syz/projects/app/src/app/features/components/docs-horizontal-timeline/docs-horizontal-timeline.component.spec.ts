import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsHorizontalTimelineComponent } from './docs-horizontal-timeline.component';

describe('DocsHorizontalTimelineComponent', () => {
  let component: DocsHorizontalTimelineComponent;
  let fixture: ComponentFixture<DocsHorizontalTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsHorizontalTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsHorizontalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
