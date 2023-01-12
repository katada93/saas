import { useState, useCallback } from 'react';
import clsx from 'clsx';


import { Sidebar } from 'components';

import './styles/index.scss';

import { TaskListPage } from 'pages';



import './styles/index.scss';


function App() {
  const { taskList, isLoading, error } = useTasks();
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  console.log(taskList, isLoading, error);

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
