import { memo } from 'react';
import clsx from 'clsx';

import { Icon } from 'components/ui';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}
export const Sidebar = memo(
  ({ isOpen, onToggle, className = '' }: SidebarProps) => {
    const classes = clsx(styles.Aside, className, {
      [styles.opened]: isOpen,
    });

    return (
      <aside className={classes}>
        <div className={styles.header}>
          <span className={styles.headerLogo}>SaaS Kit</span>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userLogo} />
          <div className={styles.userDescription}>
            <div className={styles.userName}>
              <span>Adrashidov Adrashid</span>
            </div>
            <div className={styles.userEmail}>
              <span>Adrahid@mail.ru</span>
            </div>
          </div>
        </div>

        <nav className={styles.navigation}>
          <a href="/" className={styles.link}>
            <Icon name="dashboard" className={styles.iconStroke} />
            <span>DashBoard</span>
          </a>

          <a href="/" className={styles.link}>
            <Icon name="tasks" className={styles.iconStroke} />
            <span>Tasks</span>
          </a>

          <a href="/" className={styles.link}>
            <Icon name="contact" className={styles.iconStroke} />
            <span>Contacts</span>
          </a>

          <a href="/" className={styles.link}>
            <Icon name="chat" className={styles.iconStroke} />
            <span>Chat</span>
          </a>
        </nav>

        <hr className={styles.line} />

        <button onClick={onToggle} className={styles.toggle}>
          <Icon name="toggle" className={styles.iconStroke} />
          <span>Toggle sidebar</span>
        </button>
      </aside>
    );
  },
);
