import clsx from 'clsx';
import styles from './Paper.module.scss';

interface PaperProps {
  className?: string;
  children: React.ReactNode;
}

export const Paper = ({ className = '', children }: PaperProps) => {
  return <div className={clsx(className, styles.Paper)}>{children}</div>;
};
