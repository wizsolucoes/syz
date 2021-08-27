import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocsAchievementsProgressBarComponent } from './docs-achievements-progress-bar.component';
import { NgSyzAchievementsProgressBarModule } from '@wizsolucoes/ng-syz';


describe('DocsAchievementsProgressBarComponent', () => {
  let component: DocsAchievementsProgressBarComponent;
  let fixture: ComponentFixture<DocsAchievementsProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgSyzAchievementsProgressBarModule ],
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
