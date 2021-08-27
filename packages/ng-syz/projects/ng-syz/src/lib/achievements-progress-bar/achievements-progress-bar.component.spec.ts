import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NgSyzAchievementsProgressBarComponent } from './achievements-progress-bar.component';

describe('NgSyzAchievementsProgressBarComponent', () => {
  let component: NgSyzAchievementsProgressBarComponent;
  let fixture: ComponentFixture<NgSyzAchievementsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatButtonToggleModule, FormsModule ],
      declarations: [ NgSyzAchievementsProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzAchievementsProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
