import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsHelloWorldComponent } from './docs-hello-world.component';

describe('DocsHelloWorldComponent', () => {
  let component: DocsHelloWorldComponent;
  let fixture: ComponentFixture<DocsHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsHelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
