import axios from 'axios';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

export const fetchGithubRepos = async (username: string): Promise<GithubRepo[]> => {
  const { data } = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  return data;
};
