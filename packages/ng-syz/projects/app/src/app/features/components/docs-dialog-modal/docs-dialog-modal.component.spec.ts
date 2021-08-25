import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsDialogModalComponent } from './docs-dialog-modal.component';

describe('DocsDialogModalComponent', () => {
  let component: DocsDialogModalComponent;
  let fixture: ComponentFixture<DocsDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
