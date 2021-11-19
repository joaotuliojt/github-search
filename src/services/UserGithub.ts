/* interface User {
  name: string;
  login: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
} */

const BASE_URL = "https://api.github.com/users"

export async function getUser(name: string) {
  const response = await fetch(`${BASE_URL}/${name}`);
  const user = await response.json();

  return user;
}