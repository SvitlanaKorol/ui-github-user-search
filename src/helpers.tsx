import { GitHubUser, GitHubErrorResponse } from './types/types';
import { API_URL, ERROR_REASON_CODES } from './constants';

export const isValidUserName = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;
  return usernameRegex.test(username);
};

export const getUserData = async (username: string): Promise<GitHubUser | null> => {
  if (!isValidUserName(username)) {
    throw new Error(ERROR_REASON_CODES.VALIDATION_ERROR);
  }

  const response = await fetch(`${API_URL}/users/${username}`);

  if (response.status === 404) {
    const errorResponse: GitHubErrorResponse = await response.json();
    throw new Error(
      `${ERROR_REASON_CODES.NOT_FOUND_ERROR}${username} ${
        errorResponse.message || ERROR_REASON_CODES.NOT_FOUND_DEFAULT_ERROR
      }`,
    );
  } else if (response.ok) {
    const data: GitHubUser = await response.json();
    return data;
  } else if (response.status === 400 || response.status === 422) {
    const errorResponse: GitHubErrorResponse = await response.json();
    throw new Error(`${errorResponse.message || ERROR_REASON_CODES.BAD_REQUEST_ERROR}`);
  } else {
    const errorResponse: GitHubErrorResponse = await response.json();
    throw new Error(`${errorResponse.message || ERROR_REASON_CODES.UNKNOWN_ERROR}`);
  }
};
