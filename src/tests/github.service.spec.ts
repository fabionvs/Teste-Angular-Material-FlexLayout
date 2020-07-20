import {TestBed} from '@angular/core/testing';

import {GithubService} from '../services/github.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Github} from '../model/github';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })
  it('trazer repositorios da API do github', () => {
    const gitRepos: Github[] = [{
      id: 91996772,
      node_id: 'MDEwOlJlcG9zaXRvcnk5MTk5Njc3Mg==',
      name: 'cropimg',
      full_name: 'fabionvs/cropimg',
      private: false,
      owner: {
        login: 'fabionvs',
        id: 8305479,
        node_id: 'MDQ6VXNlcjgzMDU0Nzk=',
        avatar_url: 'https://avatars3.githubusercontent.com/u/8305479?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/fabionvs',
        html_url: 'https://github.com/fabionvs',
        followers_url: 'https://api.github.com/users/fabionvs/followers',
        following_url: 'https://api.github.com/users/fabionvs/following{/other_user}',
        gists_url: 'https://api.github.com/users/fabionvs/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/fabionvs/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/fabionvs/subscriptions',
        organizations_url: 'https://api.github.com/users/fabionvs/orgs',
        repos_url: 'https://api.github.com/users/fabionvs/repos',
        events_url: 'https://api.github.com/users/fabionvs/events{/privacy}',
        received_events_url: 'https://api.github.com/users/fabionvs/received_events',
        type: 'User',
        site_admin: false
      },
      html_url: 'https://github.com/fabionvs/cropimg',
      description: 'Another cropping jQuery plugin',
      fork: true,
      url: 'https://api.github.com/repos/fabionvs/cropimg',
      forks_url: 'https://api.github.com/repos/fabionvs/cropimg/forks',
      keys_url: 'https://api.github.com/repos/fabionvs/cropimg/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/fabionvs/cropimg/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/fabionvs/cropimg/teams',
      hooks_url: 'https://api.github.com/repos/fabionvs/cropimg/hooks',
      issue_events_url: 'https://api.github.com/repos/fabionvs/cropimg/issues/events{/number}',
      events_url: 'https://api.github.com/repos/fabionvs/cropimg/events',
      assignees_url: 'https://api.github.com/repos/fabionvs/cropimg/assignees{/user}',
      branches_url: 'https://api.github.com/repos/fabionvs/cropimg/branches{/branch}',
      tags_url: 'https://api.github.com/repos/fabionvs/cropimg/tags',
      blobs_url: 'https://api.github.com/repos/fabionvs/cropimg/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/fabionvs/cropimg/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/fabionvs/cropimg/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/fabionvs/cropimg/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/fabionvs/cropimg/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/fabionvs/cropimg/languages',
      stargazers_url: 'https://api.github.com/repos/fabionvs/cropimg/stargazers',
      contributors_url: 'https://api.github.com/repos/fabionvs/cropimg/contributors',
      subscribers_url: 'https://api.github.com/repos/fabionvs/cropimg/subscribers',
      subscription_url: 'https://api.github.com/repos/fabionvs/cropimg/subscription',
      commits_url: 'https://api.github.com/repos/fabionvs/cropimg/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/fabionvs/cropimg/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/fabionvs/cropimg/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/fabionvs/cropimg/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/fabionvs/cropimg/contents/{+path}',
      compare_url: 'https://api.github.com/repos/fabionvs/cropimg/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/fabionvs/cropimg/merges',
      archive_url: 'https://api.github.com/repos/fabionvs/cropimg/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/fabionvs/cropimg/downloads',
      issues_url: 'https://api.github.com/repos/fabionvs/cropimg/issues{/number}',
      pulls_url: 'https://api.github.com/repos/fabionvs/cropimg/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/fabionvs/cropimg/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/fabionvs/cropimg/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/fabionvs/cropimg/labels{/name}',
      releases_url: 'https://api.github.com/repos/fabionvs/cropimg/releases{/id}',
      deployments_url: 'https://api.github.com/repos/fabionvs/cropimg/deployments',
      created_at: '2017-05-22T00:35:50Z',
      updated_at: '2017-05-22T00:35:51Z',
      pushed_at: '2017-05-08T21:12:57Z',
      git_url: 'git://github.com/fabionvs/cropimg.git',
      ssh_url: 'git@github.com:fabionvs/cropimg.git',
      clone_url: 'https://github.com/fabionvs/cropimg.git',
      svn_url: 'https://github.com/fabionvs/cropimg',
      homepage: null,
      size: 657,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: 'https://api.github.com/licenses/mit', node_id: 'MDc6TGljZW5zZTEz'},
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master'
    }];

    service.getRepositories('fabionvs').subscribe(repos => {
      expect(repos.length).toBe(1);
      expect(repos).toEqual(gitRepos);
    });

    const request = httpMock.expectOne('/users/fabionvs/repos');
    expect(request.request.method).toBe('GET');
    request.flush(gitRepos);
  });
});
