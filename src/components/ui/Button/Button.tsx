/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'link';
}

export const Button = ({
  className = '',
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(className, styles.Button, styles[variant])}>
      {children}
    </button>
  );
};
