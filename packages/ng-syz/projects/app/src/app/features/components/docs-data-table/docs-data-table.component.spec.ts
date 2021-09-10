import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzDataTableModule } from '@wizsolucoes/ng-syz';
import { SharedModule } from '../../../shared/shared.module';

import { DocsDataTableComponent } from './docs-data-table.component';

xdescribe('DocsDataTableComponent', () => {
  let component: DocsDataTableComponent;
  let fixture: ComponentFixture<DocsDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsDataTableComponent],
      imports: [NgSyzDataTableModule, SharedModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
