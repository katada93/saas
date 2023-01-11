import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Paper, Icon, Button, Status, Input } from 'shared/ui';
import { Sidebar, UsersTable, SearchBar } from 'components';
import { useTasks } from 'shared/hooks/useTasks';

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
      <SearchBar value="" onChange={() => {}} placeholder="Search for task" />

      <div className="content">
        <Paper>
          <Icon name="chat" />
          <Button>CLick</Button>

          <Status>Default</Status>
          <Status color="success">Scheduled</Status>
          <Status color="warning">Sent</Status>
        </Paper>
        <UsersTable />
      </div>
      <Input value="text" placeholder="ышг" />
    </div>
  );
}

export default App;
