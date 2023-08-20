import React from 'react';
import styles from './index.module.scss';

interface LogoLinkProps {
  link: string;
  imageUrl: string;
  altText: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({ link, imageUrl, altText }) => {
  return (
    <div className={styles.logoContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  );
};

export default LogoLink;
