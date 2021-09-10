import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzInitiativeResultCardModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';
import { DocsCardResultInitiativeComponent } from './docs-initiative-result-card.component';

describe('DocsCardResultInitiativeComponent', () => {
  let component: DocsCardResultInitiativeComponent;
  let fixture: ComponentFixture<DocsCardResultInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsCardResultInitiativeComponent],
      imports: [
        NgSyzInitiativeResultCardModule,
        SharedModule,
        NoopAnimationsModule,
      ],
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
