import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsAsideMenuComponent } from './docs-aside-menu.component';

describe('DocsAsideMenuComponent', () => {
  let component: DocsAsideMenuComponent;
  let fixture: ComponentFixture<DocsAsideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsAsideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsAsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
