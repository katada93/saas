import React from 'react';
import { Icon } from 'shared/ui';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchBar = ({
  placeholder = '',
  value = '',
  onChange,
}: SearchBarProps) => {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.Search}>
        <Icon className={styles.SearchIcon} name="search" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.bable}>
        <Icon className={styles.BellIcon} name="bell" />
      </div>
    </div>
  );
};
