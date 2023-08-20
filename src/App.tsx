import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './index.module.scss';
import { UserProvider, useUser } from './providers/user-provider';
import LogoLink from './components/logo-link/logo-link';
import SearchResult from './components/search-result/search-result';
import ErrorNotification from './components/error-notification/error-notification';
import { LOGO_LINK, BUTTON_NAMES, ALT_IMG_NAMES, TEXT_AREA_PLACEHOLDER } from './constants';
import Icon from '../public/icons-github.png';

const App: React.FC = () => {
  const { userData, error, searchUser, setError, setUserData } = useUser();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) return;

    setIsLoading(true);
    setError(null);
    setUserData(null);

    await searchUser(username);

    setIsLoading(false);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleDismissError = () => {
    setError(null);
    setUsername('');
  };

  return (
    <div className={styles.app}>
      <LogoLink link={LOGO_LINK} imageUrl={Icon} altText={ALT_IMG_NAMES.alt_logo} />
      <div className={styles.contentWrapper}>
        <div className={styles.searchForm}>
          <input
            type="text"
            placeholder={TEXT_AREA_PLACEHOLDER.user_name}
            value={username}
            onChange={handleUsernameChange}
            className={styles.input}
          />
          <button className={styles.button} onClick={handleSearch} disabled={isLoading}>
            {BUTTON_NAMES.searchButton}
          </button>
        </div>
        {error && <ErrorNotification errorMessage={error} onDismiss={handleDismissError} />}
        {isLoading ? (
          <div className={styles.loaderContainer}>
            <ClipLoader color="#00BFFF" size={80} />
          </div>
        ) : (
          userData && <SearchResult userData={userData} />
        )}
      </div>
    </div>
  );
};

const AppWithProvider: React.FC = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default AppWithProvider;
