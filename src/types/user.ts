export type LocalGithubUser = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string;
  repos: number;
  followers: number;
  following: null;
  created: string;
};
export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: null;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentacion_url: string;
};

// {"login": "Michal85",
// "id": 33791759,
// "node_id": "MDQ6VXNlcjMzNzkxNzU5",
// "avatar_url": "https://avatars.githubusercontent.com/u/33791759?v=4",
// "gravatar_id": "",
// "url": "https://api.github.com/users/Michal85",
// "html_url": "https://github.com/Michal85",
// "followers_url": "https://api.github.com/users/Michal85/followers",
// "following_url": "https://api.github.com/users/Michal85/following{/other_user}",
// "gists_url": "https://api.github.com/users/Michal85/gists{/gist_id}",
// "starred_url": "https://api.github.com/users/Michal85/starred{/owner}{/repo}",
// "subscriptions_url": "https://api.github.com/users/Michal85/subscriptions",
// "organizations_url": "https://api.github.com/users/Michal85/orgs",
// "repos_url": "https://api.github.com/users/Michal85/repos",
// "events_url": "https://api.github.com/users/Michal85/events{/privacy}",
// "received_events_url": "https://api.github.com/users/Michal85/received_events",
// "type": "User",
// "site_admin": false,
// "name": null,
// "company": null,
// "blog": "",
// "location": null,
// "email": null,
// "hireable": null,
// "bio": null,
// "twitter_username": null,
// "public_repos": 0,
// "public_gists": 0,
// "followers": 0,
// "following": 0,
// "created_at": "2017-11-18T20:52:41Z",
// "updated_at": "2017-11-18T20:52:41Z"}
