import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
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
      className={clsx(className, styles.Button, styles[variant])}
      {...props}>
      {children}
    </button>
  );
};
