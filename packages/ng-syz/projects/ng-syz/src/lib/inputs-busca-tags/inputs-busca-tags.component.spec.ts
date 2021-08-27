import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSyzInputsBuscaTagsComponent } from './inputs-busca-tags.component';

describe('NgSyzInputsBuscaTagsComponent', () => {
  let component: NgSyzInputsBuscaTagsComponent;
  let fixture: ComponentFixture<NgSyzInputsBuscaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzInputsBuscaTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzInputsBuscaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
