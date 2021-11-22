import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { GithubService } from '../../../core/services/github.service';
import { Contributor } from '../../models/contributor';
import { SharedModule } from '../../shared.module';
import { ComponentPageComponent } from './component-page.component';

describe('ComponentPageComponent', () => {
  let component: ComponentPageComponent;
  let fixture: ComponentFixture<ComponentPageComponent>;
  let template: HTMLElement;
  let mockGithubService: jasmine.SpyObj<GithubService>;

  beforeEach(() => {
    mockGithubService = jasmine.createSpyObj('mockGithubService', [
      'getContributors',
    ]);

    mockGithubService.getContributors.and.returnValue(of([]));
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentPageComponent],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [{ provide: GithubService, useValue: mockGithubService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPageComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#showContent', () => {
    it('should set isNgContentVisible true when tab is EXEMPLOS', () => {
      // Given
      component.isNgContentVisible = false;

      // When
      component.showContent({ tab: { textLabel: 'EXEMPLOS' } });

      // Then
      expect(component.isNgContentVisible).toBeTrue();
    });

    it('should set isNgContentVisible false when tab is not EXEMPLOS', () => {
      // Given
      component.isNgContentVisible = true;

      // When
      component.showContent({ tab: { textLabel: 'any' } });

      // Then
      expect(component.isNgContentVisible).toBeFalse();
    });
  });

  describe('#getContributors', () => {
    it('should call GitHubService.getContributors with correct argument', () => {
      // Given
      mockGithubService.getContributors.calls.reset();
      component.selector = 'ng-syz-xpto';

      // When
      component.getContributors();

      // Then
      expect(mockGithubService.getContributors).toHaveBeenCalledOnceWith(
        'xpto'
      );
    });

    it('should use GitHubService.getContributors return value to update contributors', () => {
      // Given
      const contributors: Contributor[] = [
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

      mockGithubService.getContributors.and.returnValue(of(contributors));

      // When
      component.getContributors();

      // Then
      expect(component.contributors).toEqual(contributors);
    });
  });

  describe('#ngOnInit', () => {
    it('should call getContributors', () => {
      // Given
      mockGithubService.getContributors.and.returnValue(of([]));
      spyOn(component, 'getContributors');

      // When
      component.ngOnInit();

      // Then
      expect(component.getContributors).toHaveBeenCalled();
    });
  });

  describe('ui tests', () => {
    it('should display app-contributors when there are contributors', () => {
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
      expect(template.querySelector('app-contributors')).toBeTruthy();
    });

    it('should NOT display app-contributors when there are NO contributors', () => {
      // Given
      component.contributors = [];

      // When
      fixture.detectChanges();

      // Then
      expect(template.querySelector('app-contributors')).toBeFalsy();
    });
  });
});
