import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  fakeGetDocsCommitsResponse,
  fakeGetLibCommitsResponse,
} from 'projects/app/src/testing/fakes/api-responses/github/get-commits';
import { of } from 'rxjs';
import { Contributor } from '../../shared/models/contributor';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['get']);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getContributors', () => {
    describe('given api requests succeed', () => {
      beforeEach(() => {
        mockHttpClient.get.and.returnValues(
          of(fakeGetLibCommitsResponse),
          of(fakeGetDocsCommitsResponse)
        );
      });

      it('should make correct http requests', () => {
        // When
        service.getContributors('cpf-search');

        // Then
        expect(mockHttpClient.get).toHaveBeenCalledWith(
          `https://api.github.com/repos/wizsolucoes/syz/commits?path=packages/ng-syz/projects/ng-syz/src/lib/cpf-search`
        );

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          `https://api.github.com/repos/wizsolucoes/syz/commits?path=packages/ng-syz/projects/app/src/app/features/components/docs-cpf-search`
        );
      });

      it('should return correct Observable<Contributor[]>', () => {
        // When
        service
          .getContributors('cpf-search')
          .subscribe((val: Contributor[]) => {
            // Then
            expect(val).toEqual([
              {
                username: 'TamaraMontijo',
                avatarUrl:
                  'https://avatars.githubusercontent.com/u/56484115?v=4',
              },
              {
                username: 'toureholder',
                avatarUrl:
                  'https://avatars.githubusercontent.com/u/7913941?v=4',
              },
              {
                username: 'fulanoDeTal',
                avatarUrl:
                  'https://avatars.githubusercontent.com/u/7913941?v=4',
              },
            ]);
          });
      });
    });
  });
});
