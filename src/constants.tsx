export const API_URL = 'https://api.github.com';
export const LOGO_LINK = 'https://github.com';
export const BUTTON_NAMES = {
  searchButton: 'Search',
} as const;

export const ALT_IMG_NAMES = {
  alt_logo: 'Logo icon',
  alt_user: 'User avatar',
} as const;

export const LINK_NAMES = {
  view_profile: 'View GitHub Profile',
} as const;

export const TEXT_AREA_PLACEHOLDER = {
  user_name: 'Enter GitHub username',
} as const;

export const USER_INFO_TITLE = {
  user_name: 'UserName: ',
  bio: 'Bio: ',
  user_link: 'UserLink: ',
} as const;

export const ERROR_REASON_CODES = {
  VALIDATION_ERROR: 'Invalid username format. Please enter a valid GitHub user',
  NOT_FOUND_ERROR: 'User with name: ',
  NOT_FOUND_DEFAULT_ERROR: 'User not found',
  BAD_REQUEST_ERROR: 'Bad Request',
  UNKNOWN_ERROR: 'An error occurred',
  CONTEXT_ERROR: 'useUser must be used within a UserProvider',
} as const;

export const DEFAULT_FIELD_VALUE = 'Not available';
