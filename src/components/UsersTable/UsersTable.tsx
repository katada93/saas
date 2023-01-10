import { useState } from 'react';
import { Table } from 'shared/ui';
import { compareString } from 'shared/utils';

interface User {
  name: string;
  email: string;
  company: string;
  role: string;
  forecast: string;
  recent: string;
}

const userList = [
  {
    name: 'West',
    email: 'lindsey@gmail.com',
    company: 'Hatchbuck',
    select: <input type="checkbox" />,
    role: 'Manager',
    forecast: '50 %',
    recent: '5 Minutes ago',
  },
  {
    name: 'Lindsey',
    email: 'lindsey@gmail.com',
    company: 'Hatchbuck',
    select: <input type="checkbox" />,
    role: 'Manager',
    forecast: '50 %',
    recent: '5 Minutes ago',
  },
  {
    name: 'Abraham',
    email: 'stroud@gmail.com',
    select: <input type="checkbox" />,
    company: 'Hatchbuck',
    role: 'Developer',
    forecast: '25 %',
    recent: '15 Minutes ago',
  },
];

export const UsersTable = () => {
  const [users, setUsers] = useState(userList);

  const handleSort = (value: keyof User, sortType: 'asc' | 'desc') => {
    setUsers((prev) =>
      [...prev].sort((a, b) => compareString(a[value], b[value], sortType)),
    );
  };

  const columns = [
    { value: 'select', displayValue: <input type="checkbox" /> },
    { value: 'name', displayValue: 'Name', onSort: handleSort },
    { value: 'email', displayValue: 'Email' },
    { value: 'company', displayValue: 'Company Name' },
    { value: 'role', displayValue: 'Role' },
    { value: 'forecast', displayValue: 'Forecast' },
    { value: 'recent', displayValue: 'Recent activity' },
  ];

  return <Table<User> columns={columns} rows={users} />;
};
