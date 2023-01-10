import { Table } from 'shared/ui';

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
  const columns = [
    { value: 'select', displayValue: <input type="checkbox" /> },
    { value: 'name', displayValue: 'Name' },
    { value: 'email', displayValue: 'Email' },
    { value: 'company', displayValue: 'Company Name' },
    { value: 'role', displayValue: 'Role' },
    { value: 'forecast', displayValue: 'Forecast' },
    { value: 'recent', displayValue: 'Recent activity' },
  ];

  return <Table columns={columns} rows={userList} />;
};
