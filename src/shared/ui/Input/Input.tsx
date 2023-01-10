import { useState } from 'react';
import styles from './Input.module.scss';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value: string;
}

export const Input = ({
  type = 'text',
  placeholder = 'placeholder',
  value = '',
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.InputWrapper}>
      <span
        className={`${styles.placeholder} ${
          focus || value ? styles.focused : ''
        }`}>
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
