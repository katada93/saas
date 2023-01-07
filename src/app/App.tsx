import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Paper, Icon, Button, Status, Table } from 'components/ui';
import { Sidebar } from 'components/Sidebar/Sidebar';

import styles from './styles/index.module.scss';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

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
        <Table header={contacts} data={tableData} />
      </div>
    </div>
  );
}

export default App;
