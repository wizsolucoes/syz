import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { DocsLoginWithCardsFlowComponent } from './docs-login-with-cards-flow.component';

describe('DocsLoginWithCardsFlowComponent', () => {
  let component: DocsLoginWithCardsFlowComponent;
  let fixture: ComponentFixture<DocsLoginWithCardsFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsLoginWithCardsFlowComponent],
      imports: [SharedTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsLoginWithCardsFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
