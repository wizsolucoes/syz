import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsCardResultInitiativeComponent } from './docs-card-result-initiative.component';

describe('DocsCardResultInitiativeComponent', () => {
  let component: DocsCardResultInitiativeComponent;
  let fixture: ComponentFixture<DocsCardResultInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsCardResultInitiativeComponent ]
    })
    .compileComponents();
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
