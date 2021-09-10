import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgSyzSideBarFilterModule } from 'projects/ng-syz/src/public-api';
import { SharedModule } from '../../../shared/shared.module';

import { DocsFiltroComponent } from './docs-sidebar-filter.component';

describe('DocsFiltroComponent', () => {
  let component: DocsFiltroComponent;
  let fixture: ComponentFixture<DocsFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsFiltroComponent],
      imports: [NgSyzSideBarFilterModule, NoopAnimationsModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
