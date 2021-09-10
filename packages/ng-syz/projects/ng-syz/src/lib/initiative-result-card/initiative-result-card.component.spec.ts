import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaskModule } from 'ngx-mask';

import { NgSyzInitiativeResultCardComponent } from './initiative-result-card.component';

describe('NgSyzInitiativeResultCardComponent', () => {
  let component: NgSyzInitiativeResultCardComponent;
  let fixture: ComponentFixture<NgSyzInitiativeResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzInitiativeResultCardComponent],
      imports: [NgxMaskModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzInitiativeResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
