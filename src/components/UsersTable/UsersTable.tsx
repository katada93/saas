import { useUsers } from 'shared/hooks/useUsers';
import { Table } from 'shared/ui';

interface User {
  name: string;
  email: string;
  company: string;
  role: string;
  forecast: string;
  recent: string;
}

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
  const { userList, isLoading, error } = useUsers();

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
  }

  return <Table columns={columns} rows={userList} />;
};
