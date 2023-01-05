import { useState, useCallback } from 'react';
import clsx from 'clsx';

import { Paper, Icon, Button, Status } from 'components/ui';
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

      <Paper>
        <p>Hello</p>
        <Icon name="chat" />
        <Button>CLick</Button>
        <Button variant="outline">CLick</Button>
        <Button variant="link">CLick</Button>

        <Status>Default</Status>
        <Status color="success">Scheduled</Status>
        <Status color="warning">Sent</Status>
        <Status color="danger">Archived</Status>
        <Status color="secondary">Draft</Status>
      </Paper>
    </div>
  );
}

export default App;
