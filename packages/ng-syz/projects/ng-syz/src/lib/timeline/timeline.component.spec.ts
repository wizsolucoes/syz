import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { NgSyzTimelineComponent } from './timeline.component';

describe('NgSyzTimelineComponent', () => {
  let component: NgSyzTimelineComponent;
  let fixture: ComponentFixture<NgSyzTimelineComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzTimelineComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true } // using this to autodetec changes made in ts to reflect in template
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzTimelineComponent);
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
