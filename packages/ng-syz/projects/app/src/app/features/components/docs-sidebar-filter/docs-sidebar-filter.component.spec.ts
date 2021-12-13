import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';
import { NgSyzSideBarFilterModule } from 'projects/ng-syz/src/public-api';
import { DocsFiltroComponent } from './docs-sidebar-filter.component';

describe('DocsFiltroComponent', () => {
  let component: DocsFiltroComponent;
  let fixture: ComponentFixture<DocsFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsFiltroComponent],
      imports: [NgSyzSideBarFilterModule, SharedTestingModule],
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
