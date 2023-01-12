import { useState } from 'react';
import { compare } from 'shared/utils';
import styles from './Table.module.scss';

type TableSortType = 'asc' | 'desc';
interface TableColumn {
  value: string;
  displayValue: React.ReactNode;
  sortable?: boolean;
}
type TableRow = Record<string, any>;
interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

export const Table = ({ columns, rows }: TableProps) => {
  const [sortType, setSortType] = useState<TableSortType>('asc');
  const [data, setData] = useState(rows);

  const handleSort = (value: string) => {
    setData((prev) =>
      [...prev].sort((a, b) => compare(a[value], b[value], sortType)),
    );
    setSortType(sortType === 'asc' ? 'desc' : 'asc');
  };

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {columns.map(({ value, displayValue, sortable }) => {
            return (
              <th
                onClick={sortable ? () => handleSort(value) : undefined}
                key={value}
                role="columnheader"
                tabIndex={0}
                aria-sort={sortType === 'asc' ? 'ascending' : 'descending'}>
                {displayValue}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index} role="row" tabIndex={0}>
            {columns.map(({ value }) => (
              <td key={value} role="cell" tabIndex={-1}>
                {item[value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
