import { useState } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value: string;
  className?: string;
}

export const Input = ({
  className = '',
  type = 'text',
  placeholder = '',
  value,
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={clsx(styles.InputWrapper, {
        [styles.inputFocused]: focus,
      })}>
      <span
        className={clsx(className, styles.placeholder, {
          [styles.focused]: focus || value,
        })}>
        {placeholder}
      </span>
      <input
        type={type}
        value={value}
        {...props}
        className={styles.Input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};
