import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NgSyzAchievementsProgressBarComponent } from './achievements-progress-bar.component';

describe('NgSyzAchievementsProgressBarComponent', () => {
  let component: NgSyzAchievementsProgressBarComponent;
  let fixture: ComponentFixture<NgSyzAchievementsProgressBarComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatButtonToggleModule, FormsModule ],
      declarations: [ NgSyzAchievementsProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzAchievementsProgressBarComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sent event emitter', () => {
    spyOn(component.verifyToggleLeftIsSelectedEvent, 'emit');
    const trigger = template.querySelector('mat-button-toggle-group');
    trigger.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.verifyToggleLeftIsSelectedEvent.emit).toHaveBeenCalledWith(true);
  });

});
