import { useState } from 'react';
import { Table } from 'shared/ui';
import { compareString } from 'shared/utils';

interface Task {
  title: string;
  state: string;
  branchId: string;
  points: string;
  time: string;
}

const tasksList = [
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
  const [tasks, setTasks] = useState(tasksList);

  const handleSort = (value: keyof Task, sortType: 'asc' | 'desc') => {
    setTasks((prev) =>
      [...prev].sort((a, b) => compareString(a[value], b[value], sortType)),
    );
  };

  const columns = [
    { value: 'title', displayValue: 'Name', onSort: handleSort },
    { value: 'state', displayValue: 'State' },
    { value: 'branchId', displayValue: 'Department' },
    { value: 'points', displayValue: 'Points' },
    { value: 'time', displayValue: 'Time' },
  ];

  return <Table columns={columns} rows={tasks} />;
};
