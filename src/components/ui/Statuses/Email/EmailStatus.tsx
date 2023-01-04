import clsx from 'clsx';
import styles from './EmailStatus.module.scss';

interface EmailStatusProps {
  className?: string;
  variant?: 'scheduled' | 'sent' | 'archived' | 'draft';
}

export const EmailStatus = ({
  className = '',
  variant = 'scheduled',
}: EmailStatusProps) => {
  return (
    <div className={clsx(className, styles.EmailStatus, styles[variant])}>
      {variant}
    </div>
  );
};
