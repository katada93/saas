import { Paper, Icon, Button, Status } from 'components/ui';

import './styles/index.scss';

function App() {
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
        <Status variant="purple">Scheduled</Status>
        <Status variant="green">Sent</Status>
        <Status variant="red">Archived</Status>
        <Status variant="orange">Draft</Status>
      </Paper>
    </div>
  );
}

export default App;
