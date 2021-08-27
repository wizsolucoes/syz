import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsTablePaginationComponent } from './docs-table-pagination.component';

describe('DocsTablePaginationComponent', () => {
  let component: DocsTablePaginationComponent;
  let fixture: ComponentFixture<DocsTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsTablePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
