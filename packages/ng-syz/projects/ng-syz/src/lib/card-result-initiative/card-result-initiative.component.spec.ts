import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMaskModule } from 'ngx-mask';

import { NgSyzCardResultInitiativeComponent } from './card-result-initiative.component';

describe('NgSyzCardResultInitiativeComponent', () => {
  let component: NgSyzCardResultInitiativeComponent;
  let fixture: ComponentFixture<NgSyzCardResultInitiativeComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgSyzCardResultInitiativeComponent],
      imports: [NgxMaskModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSyzCardResultInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
