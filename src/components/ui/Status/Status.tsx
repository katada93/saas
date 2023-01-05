import clsx from 'clsx';
import React from 'react';
import styles from './Status.module.scss';

interface StatusProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'purple' | 'green' | 'red' | 'orange';
}

export const Status = ({
  className = '',
  variant = 'green',
  children,
}: StatusProps) => {
  return (
    <div className={clsx(className, styles.Status, styles[variant])}>
      {children}
    </div>
  );
};
