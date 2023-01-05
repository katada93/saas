import { useState, useCallback } from 'react';

import { Paper, Icon, Button, Status } from 'components/ui';
import { Sidebar } from 'components/Sidebar/Sidebar';

import styles from './styles/index.module.scss';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpenSidebar(!isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div className={styles.App}>
      <h1>SAAS App</h1>
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
      <Sidebar isOpen={isOpenSidebar} onToggle={handleToggle} />
    </div>
  );
}

export default App;
