import { useState } from 'react';

import { Paper, Icon, Button, Status } from 'components/ui';
import { Sidebar } from 'components/Sidebar/Sidebar';

import './styles/index.scss';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
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

        <Sidebar isOpen={open} onOpen={() => setOpen(!open)} />
      </Paper>
    </div>
  );
}

export default App;
