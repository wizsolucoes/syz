import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSyzGlossarioComponent } from './glossario.component';

describe('NgSyzGlossarioComponent', () => {
  let component: NgSyzGlossarioComponent;
  let fixture: ComponentFixture<NgSyzGlossarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSyzGlossarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzGlossarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
