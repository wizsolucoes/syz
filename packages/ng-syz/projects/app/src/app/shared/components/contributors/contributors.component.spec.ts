import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from 'projects/app/src/testing/modules/shared-testing/shared-testing.module';

import { ContributorsComponent } from './contributors.component';

describe('ContributorsComponent', () => {
  let component: ContributorsComponent;
  let fixture: ComponentFixture<ContributorsComponent>;
  let template: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributorsComponent],
      imports: [SharedTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    template = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#contributors', () => {
    it('should display an item for each contributor', () => {
      // Given
      component.contributors = [
        {
          username: 'TamaraMontijo',
          avatarUrl: 'https://avatars.githubusercontent.com/u/56484115?v=4',
        },
        {
          username: 'toureholder',
          avatarUrl: 'https://avatars.githubusercontent.com/u/7913941?v=4',
        },
        {
          username: 'fulanoDeTal',
          avatarUrl: 'https://avatars.githubusercontent.com/u/7913941?v=4',
        },
      ];

      // When
      fixture.detectChanges();

      // Then
      expect(
        template.querySelectorAll('[data-test="contributor"]').length
      ).toEqual(component.contributors.length);
    });
  });
});
