import React from 'react';
import { Icon } from 'shared/ui';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.Search}>
        <Icon className={styles.SearchIcon} name="search" />
        <input type="text" placeholder={placeholder} />
      </div>
      <div className={styles.bable}>
        <Icon className={styles.BellIcon} name="bell" />
      </div>
    </div>
  );
};
