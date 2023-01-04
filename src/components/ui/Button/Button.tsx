import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'link';
}

export const Button = ({
  className,
  variant,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(
        className && styles[className],
        variant && styles[variant],
      )}>
      {children}
    </button>
  );
};

export default Button;
