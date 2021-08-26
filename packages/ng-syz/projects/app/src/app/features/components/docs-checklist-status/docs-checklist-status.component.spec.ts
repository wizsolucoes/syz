import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsChecklistStatusComponent } from './docs-checklist-status.component';

describe('DocsChecklistStatusComponent', () => {
  let component: DocsChecklistStatusComponent;
  let fixture: ComponentFixture<DocsChecklistStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsChecklistStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsChecklistStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
