import { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';

import { Paper, Icon, Button, Status } from 'shared/ui';
import { Sidebar, UsersTable } from 'components';
import {
  getTaskList,
  // selectTaskList,
  // selectTasksLoading,
  // selectTasksError,
} from 'features/tasks/taskSlice';
import {
  useAppDispatch,
  // useAppSelector
} from './hooks';

import styles from './styles/index.module.scss';

function App() {
  // const taskList = useAppSelector(selectTaskList);
  // const isLoading = useAppSelector(selectTasksLoading);
  // const error = useAppSelector(selectTasksError);
  const dispatch = useAppDispatch();
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  // console.log(taskList, isLoading, error);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return (
    <div
      className={clsx(styles.App, { [styles.isOpenSidebar]: isOpenSidebar })}>
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />

      <div className={styles.content}>
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
