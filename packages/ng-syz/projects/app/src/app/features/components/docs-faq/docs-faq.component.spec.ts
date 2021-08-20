import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsFaqComponent } from './docs-faq.component';

describe('DocsFaqComponent', () => {
  let component: DocsFaqComponent;
  let fixture: ComponentFixture<DocsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
