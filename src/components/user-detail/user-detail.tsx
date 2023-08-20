import React from 'react';
import styles from './index.module.scss';
import { LINK_NAMES, DEFAULT_FIELD_VALUE } from '../../constants';

interface UserDetailProps {
  title: string;
  value?: string | null;
  link?: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ title, value, link }) => {
  return (
    <div className={styles.userInfoBlock}>
      <h3 className={styles.title}>{title}</h3>
      {link ? (
        <a className={styles.userLink} href={link} target="_blank" rel="noopener noreferrer">
          {LINK_NAMES.view_profile || DEFAULT_FIELD_VALUE}
        </a>
      ) : (
        <p className={styles.description}>{value || DEFAULT_FIELD_VALUE}</p>
      )}
    </div>
  );
};

export default UserDetail;
