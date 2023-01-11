import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Sidebar } from 'components';

import './styles/index.scss';

import { TaskListPage } from 'pages';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div className={clsx('App', { isOpenSidebar })}>
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />
      <TaskListPage />
    </div>
  );
}

export default App;
