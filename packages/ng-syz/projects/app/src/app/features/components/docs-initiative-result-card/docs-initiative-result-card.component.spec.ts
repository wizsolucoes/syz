import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzInitiativeResultCardModule } from '@wizsolucoes/ng-syz';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsCardResultInitiativeComponent } from './docs-initiative-result-card.component';

describe('DocsCardResultInitiativeComponent', () => {
  let component: DocsCardResultInitiativeComponent;
  let fixture: ComponentFixture<DocsCardResultInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsCardResultInitiativeComponent],
      imports: [NgSyzInitiativeResultCardModule, SharedTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsCardResultInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
