import { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';

import { Paper, Icon, Button, Status, Table } from 'shared/ui';
import { Sidebar } from 'components/Sidebar/Sidebar';
import {
  getTaskList,
  selectTaskList,
  selectTasksLoading,
  selectTasksError,
} from 'features/tasks/TaskSlice';
import { useAppDispatch, useAppSelector } from './hooks';

import styles from './styles/index.module.scss';

function App() {
  const taskList = useAppSelector(selectTaskList);
  const isLoading = useAppSelector(selectTasksLoading);
  const error = useAppSelector(selectTasksError);
  const dispatch = useAppDispatch();
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  console.log(taskList, isLoading, error);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  const contacts = [
    { value: 'select', displayValue: <input type="checkbox" /> },
    { value: 'name', displayValue: 'Name' },
    { value: 'email', displayValue: 'Email' },
    { value: 'company', displayValue: 'Company Name' },
    { value: 'role', displayValue: 'Role' },
    { value: 'forecast', displayValue: 'Forecast' },
    { value: 'recent', displayValue: 'Recent activity' },
  ];

  const tableData = [
    {
      name: 'Lindsey',
      email: 'lindsey@gmail.com',
      company: 'Hatchbuck',
      select: <input type="checkbox" />,
      role: 'Manager',
      forecast: '50 %',
      recent: '5 Minutes ago',
    },
    {
      name: 'Stroud',
      email: 'stroud@gmail.com',
      select: <input type="checkbox" />,
      company: 'Hatchbuck',
      role: 'Manager',
      forecast: '25 %',
      recent: '15 Minutes ago',
    },
  ];

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
          <Table header={contacts} data={tableData} />
        </Paper>
      </div>
    </div>
  );
}

export default App;
