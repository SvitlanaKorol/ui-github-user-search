import React from 'react';
import styles from './index.module.scss';

interface ErrorNotificationProps {
  errorMessage: string;
  onDismiss: () => void;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ errorMessage, onDismiss }) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.error}>{errorMessage}</p>
      <button className={styles.closeButton} onClick={onDismiss}>
        &#120684;
      </button>
    </div>
  );
};

export default ErrorNotification;
