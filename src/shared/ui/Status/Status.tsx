import clsx from 'clsx';
import React from 'react';
import styles from './Status.module.scss';

interface StatusProps {
  children: React.ReactNode;
  className?: string;
  color?: 'success' | 'warning' | 'danger' | 'secondary';
}

export const Status = ({
  className = '',
  color = 'success',
  children,
}: StatusProps) => {
  return (
    <span className={clsx(styles.Status, styles[color], className)}>
      {children}
    </span>
  );
};
