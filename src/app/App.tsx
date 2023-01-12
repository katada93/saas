import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Paper } from 'shared/ui';
import { Sidebar, SearchBar } from 'components';

import './styles/index.scss';
import { TasksTable } from 'components/TasksTable/TasksTable';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div className={clsx('App', { isOpenSidebar })}>
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />
      <SearchBar value="" onChange={() => {}} placeholder="Search for task" />

      <div className="content">
        <Paper>
          <TasksTable />
        </Paper>
      </div>
    </div>
  );
}

export default App;
