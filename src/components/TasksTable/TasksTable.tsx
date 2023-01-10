import { useState } from 'react';
import { Table } from 'shared/ui';

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

  const handleSort = (value: string) => {
    setTasks((prev) => {
      const sorted = [...prev].sort((a, b) =>
        a[value as keyof Task].localeCompare(b[value as keyof Task]),
      );
      return sorted;
    });
  };

  const columns = [
    { value: 'title', displayValue: 'Name', onSort: handleSort },
    { value: 'state', displayValue: 'State' },
    { value: 'branchId', displayValue: 'Department' },
    { value: 'points', displayValue: 'Points' },
    { value: 'time', displayValue: 'Time' },
  ];

  return <Table header={columns} data={tasks} />;
};
