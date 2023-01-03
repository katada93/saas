import { Paper } from './components/ui/Paper/Paper';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <h1>App</h1>
      <Paper>
        <p>Hello</p>
      </Paper>
    </div>
  );
}

export default App;
