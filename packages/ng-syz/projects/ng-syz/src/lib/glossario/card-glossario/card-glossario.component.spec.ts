import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMasonryModule } from 'ngx-masonry';

import { NgSyzCardGlossarioComponent } from './card-glossario.component';

describe('NgSyzCardGlossarioComponent', () => {
  let component: NgSyzCardGlossarioComponent;
  let fixture: ComponentFixture<NgSyzCardGlossarioComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [NgxMasonryModule],
      declarations: [ NgSyzCardGlossarioComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzCardGlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
