import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Paper, Icon, Button, Status } from 'shared/ui';
import { Sidebar, UsersTable } from 'components';
import { useUsers } from 'shared/hooks/userUsers';

import './styles/index.scss';
import { SearchBar } from 'components/SearchBar/SearchBar';

function App() {
  const { taskList, isLoading, error } = useUsers();
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  console.log(taskList, isLoading, error);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div className={clsx('App', { isOpenSidebar })}>
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />
      <SearchBar placeholder="Search for task" />

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
    </div>
  );
}

export default App;
