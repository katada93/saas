import { Paper, Icon } from 'components/ui';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>SAAS App</h1>
      <Paper>
        <p>Hello</p>
        <Icon name="chat" className={styles.icon} />
      </Paper>
    </div>
  );
}

export default App;
