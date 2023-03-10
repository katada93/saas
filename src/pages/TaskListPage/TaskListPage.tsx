import { SearchBar, TasksTable } from 'components';

import styles from './TaskListPage.module.scss';

const TaskListPage = () => {
  return (
    <div className={styles.TaskListPage}>
      <SearchBar placeholder="Search for a task" value="" onChange={() => {}} />
      <div className={styles.TableContainer}>
        <TasksTable />
      </div>
    </div>
  );
};

export default TaskListPage;
