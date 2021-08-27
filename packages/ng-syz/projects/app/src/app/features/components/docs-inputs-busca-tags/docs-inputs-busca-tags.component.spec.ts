import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsInputsBuscaTagsComponent } from './docs-inputs-busca-tags.component';

describe('DocsInputsBuscaTagsComponent', () => {
  let component: DocsInputsBuscaTagsComponent;
  let fixture: ComponentFixture<DocsInputsBuscaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsInputsBuscaTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsInputsBuscaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
