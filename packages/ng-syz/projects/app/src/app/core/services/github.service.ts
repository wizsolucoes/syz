import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contributor } from '../../shared/models/contributor';

interface ApiCommitAuthor {
  login: string;
  avatar_url: string;
}

interface ApiCommit {
  author: ApiCommitAuthor;
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpClient: HttpClient) {}

  getContributors(selector: string): Observable<Contributor[]> {
    const baseUrl =
      'https://api.github.com/repos/wizsolucoes/syz/commits?path=packages/ng-syz/projects';

    return forkJoin([
      this.httpClient.get(`${baseUrl}/ng-syz/src/lib/${selector}`),
      this.httpClient.get(
        `${baseUrl}/app/src/app/features/components/docs-${selector}`
      ),
    ]).pipe(
      map((commits: any[]) => {
        return this.mapCommitsToContributors([...commits[0], ...commits[1]]);
      })
    );
  }

  private mapCommitsToContributors(commits: ApiCommit[]): Contributor[] {
    const hashMap: { [key: string]: Contributor } = {};

    commits.forEach((commit: ApiCommit) => {
      const author = commit.author;
      const username = author?.login;

      if (username) {
        hashMap[username] = {
          username: author.login,
          avatarUrl: author.avatar_url,
        };
      }
    });

    return Object.values(hashMap);
  }
}
