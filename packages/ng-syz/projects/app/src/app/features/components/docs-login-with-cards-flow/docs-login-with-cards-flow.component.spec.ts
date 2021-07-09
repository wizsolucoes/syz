import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';

import { DocsLoginWithCardsFlowComponent } from './docs-login-with-cards-flow.component';

describe('DocsLoginWithCardsFlowComponent', () => {
  let component: DocsLoginWithCardsFlowComponent;
  let fixture: ComponentFixture<DocsLoginWithCardsFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsLoginWithCardsFlowComponent],
      imports: [SharedModule, NoopAnimationsModule],
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
