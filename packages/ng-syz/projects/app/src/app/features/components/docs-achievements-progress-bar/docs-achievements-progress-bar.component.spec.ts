import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzAchievementsProgressBarModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsAchievementsProgressBarComponent } from './docs-achievements-progress-bar.component';

describe('DocsAchievementsProgressBarComponent', () => {
  let component: DocsAchievementsProgressBarComponent;
  let fixture: ComponentFixture<DocsAchievementsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSyzAchievementsProgressBarModule, SharedTestingModule],
      declarations: [DocsAchievementsProgressBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsAchievementsProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
