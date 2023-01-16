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

const useFocus = () => {
  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);

  return { focus, onFocus, onBlur };
};

export const Input = ({
  className = '',
  type = 'text',
  placeholder = '',
  value,
  ...props
}: InputProps) => {
  const { focus, onFocus, onBlur } = useFocus();

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
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
