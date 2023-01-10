import { Table } from 'shared/ui';

interface Task {
  title: string;
  state: string;
  branchId: string;
  points: string;
  time: string;
}

const taskList: Task[] = [
  {
    title: 'Тест таблицы1',
    state: 'lindsey@gmail.com',
    branchId: 'Бухгалтерия',
    points: '70',
    time: '120',
  },
  {
    title: 'Тест таблицы2',
    state: 'lindsey@gmail.com',
    branchId: 'Бухгалтерия',
    points: '70',
    time: '120',
  },
  {
    title: 'Тест таблицы3',
    state: 'lindsey@gmail.com',
    branchId: 'Бухгалтерия',
    points: '70',
    time: '120',
  },
];

interface Column {
  value: keyof Task;
  displayValue: string | JSX.Element;
  sortable?: boolean;
}

const columns: Column[] = [
  { value: 'title', displayValue: 'Name', sortable: true },
  { value: 'state', displayValue: 'State' },
  { value: 'branchId', displayValue: 'Department' },
  { value: 'points', displayValue: 'Points' },
  { value: 'time', displayValue: 'Time' },
];

export const TasksTable = () => {
  return <Table columns={columns} rows={taskList} />;
};
