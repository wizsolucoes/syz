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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create', () => {
  //   let maxWidth = component.maxWidth
  //   let maxNumber = 800
  //   expect(maxWidth).toEqual(maxNumber);
  // });

  // it('should create', () => {
  //   let name = component.testefc()
  //   expect(name).toEqual('gabriel')
  // });

  // it('should emit buttonClick event', () => {
  //   let actionButton = component.submitActionButton();
  //   let action = component.action;
  //   expect(actionButton).toHaveBeenCalled()
  // });

});
