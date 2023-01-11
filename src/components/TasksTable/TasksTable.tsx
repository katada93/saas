import { useTasks } from 'shared/hooks/useTasks';
import { Task } from 'shared/models/task.model';
import { Table } from 'shared/ui';

interface Column {
  value: keyof Task;
  displayValue: string | JSX.Element;
  sortable?: boolean;
}

const columns: Column[] = [
  { value: 'title', displayValue: 'Name', sortable: true },
  { value: 'state', displayValue: 'State' },
  { value: 'text', displayValue: 'Department', sortable: true },
  { value: 'points', displayValue: 'Points' },
  { value: 'time', displayValue: 'Time' },
  { value: 'createdAt', displayValue: 'Date' },
];

export const TasksTable = () => {
  const { taskList, isLoading } = useTasks();

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return <Table columns={columns} rows={taskList} />;
};
