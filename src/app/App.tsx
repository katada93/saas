import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { TaskPage } from 'pages';
import { Sidebar } from 'components/Sidebar/Sidebar';

import styles from './styles/index.module.scss';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div
      className={clsx(styles.App, { [styles.isOpenSidebar]: isOpenSidebar })}>
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />

      <div className={styles.content}>
        <TaskPage />
      </div>
    </div>
  );
}

export default App;
