import React from 'react';
import styles from './index.module.scss';
import UserDetail from '../user-detail/user-detail';
import { GitHubUser } from '../../types/types';
import { ALT_IMG_NAMES, USER_INFO_TITLE } from '../../constants';

interface SearchResultProps {
  userData: GitHubUser;
}

const SearchResult: React.FC<SearchResultProps> = ({ userData }) => {
  return (
    <div className={styles.searchResult}>
      <img className={styles.userAvatar} src={userData.avatar_url} alt={ALT_IMG_NAMES.alt_user} />
      <div className={styles.userInfo}>
        <UserDetail title={USER_INFO_TITLE.user_name} value={userData.login} />
        <UserDetail title={USER_INFO_TITLE.bio} value={userData.bio} />
        <UserDetail title={USER_INFO_TITLE.user_link} link={userData.html_url} />
      </div>
    </div>
  );
};

export default SearchResult;
