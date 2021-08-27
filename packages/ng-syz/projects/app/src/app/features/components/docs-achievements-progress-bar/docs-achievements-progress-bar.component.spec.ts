import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocsAchievementsProgressBarComponent } from './docs-achievements-progress-bar.component';
import { NgSyzAchievementsProgressBarModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('DocsAchievementsProgressBarComponent', () => {
  let component: DocsAchievementsProgressBarComponent;
  let fixture: ComponentFixture<DocsAchievementsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgSyzAchievementsProgressBarModule, SharedModule, NoopAnimationsModule ],
      declarations: [ DocsAchievementsProgressBarComponent ]
    })
    .compileComponents();
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
