import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzTablePaginationModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

import { DocsTablePaginationComponent } from './docs-table-pagination.component';

xdescribe('DocsTablePaginationComponent', () => {
  let component: DocsTablePaginationComponent;
  let fixture: ComponentFixture<DocsTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsTablePaginationComponent],
      imports: [NgSyzTablePaginationModule, SharedModule, NoopAnimationsModule],
    }).compileComponents();
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
