import { Paper, Icon, Button } from 'components/ui';

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
      </Paper>
    </div>
  );
}

export default App;
