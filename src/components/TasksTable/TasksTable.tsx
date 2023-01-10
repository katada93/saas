import { Table } from 'shared/ui';

const taskList = [
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

export const TasksTable = () => {
  const columns = [
    { value: 'title', displayValue: 'Name' },
    { value: 'state', displayValue: 'State' },
    { value: 'branchId', displayValue: 'Department' },
    { value: 'points', displayValue: 'Points' },
    { value: 'time', displayValue: 'Time' },
  ];

  return <Table columns={columns} rows={taskList} />;
};
