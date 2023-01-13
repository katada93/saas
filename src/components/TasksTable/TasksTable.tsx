import { useTasks } from 'shared/hooks/useTasks';
import { TaskDB } from 'shared/models/task.model';
import { Table } from 'shared/ui';

interface Column {
  value: keyof TaskDB;
  displayValue: string | JSX.Element;
  sortable?: boolean;
}

const columns: Column[] = [
  { value: 'title', displayValue: 'Name', sortable: true },
  { value: 'state', displayValue: 'State', sortable: true },
  { value: 'text', displayValue: 'Department', sortable: true },
  { value: 'points', displayValue: 'Points', sortable: true },
  { value: 'time', displayValue: 'Time', sortable: true },
  { value: 'createdAt', displayValue: 'Date' },
];

export const TasksTable = () => {
  const { taskList, isLoading, error } = useTasks();

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return <Table columns={columns} rows={taskList} />;
};
