export interface GitHubUser {
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
}

export interface GitHubErrorResponse {
  message: string;
}
