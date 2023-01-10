import { Table } from 'shared/ui';

interface User {
  name: string;
  email: string;
  company: string;
  role: string;
  forecast: string;
  recent: string;
}

const userList: Array<Record<keyof User | 'select', React.ReactNode>> = [
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

interface Column {
  value: keyof User | 'select';
  displayValue: string | JSX.Element;
  sortable?: boolean;
}

const columns: Column[] = [
  { value: 'select', displayValue: <input type="checkbox" /> },
  { value: 'name', displayValue: 'Name', sortable: true },
  { value: 'email', displayValue: 'Email', sortable: true },
  { value: 'company', displayValue: 'Company Name' },
  { value: 'role', displayValue: 'Role' },
  { value: 'forecast', displayValue: 'Forecast' },
  { value: 'recent', displayValue: 'Recent activity' },
];

export const UsersTable = () => {
  return <Table columns={columns} rows={userList} />;
};
