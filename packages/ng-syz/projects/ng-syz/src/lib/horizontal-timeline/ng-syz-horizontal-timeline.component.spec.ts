import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzHorizontalTimelineComponent } from './ng-syz-horizontal-timeline.component';

describe('NgSyzHorizontalTimelineComponent', () => {
  let component: NgSyzHorizontalTimelineComponent;
  let fixture: ComponentFixture<NgSyzHorizontalTimelineComponent>;
   
  let timelineData = [
    {
      Name: "Etapa 1",
      Current: false,
      Completed: true,
    },
    {
      Name: "Etapa 2",
      Current: true,
      Completed: false,
    },
    {
      Name: "Etapa 3",
      Current: false,
      Completed: false,
    },
    {
      Name: "Etapa 4",
      Current: false,
      Completed: false,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzHorizontalTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzHorizontalTimelineComponent);
    component = fixture.componentInstance;
    component.timelineData = timelineData;
    fixture.detectChanges();   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
