import {
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';
import { NgSyzStatusTimelineComponent } from './status-timeline.component';

describe('NgSyzStatusTimelineComponent', () => {
  let component: NgSyzStatusTimelineComponent;
  let fixture: ComponentFixture<NgSyzStatusTimelineComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzStatusTimelineComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }, // using this to autodetec changes made in ts to reflect in template
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzStatusTimelineComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title if receive some', () => {
    component.title = 'some title';
    fixture.detectChanges();
    expect(template.querySelector('span[data-test="title"]')).toBeTruthy();
  });
});
