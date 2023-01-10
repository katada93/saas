import { useState } from 'react';
import styles from './Table.module.scss';

type DisplayValue = string | number | JSX.Element;
type SortType = 'asc' | 'desc';

interface TableProps<T> {
  columns: Array<{
    value: string;
    displayValue: DisplayValue;
    onSort?: (value: keyof T, sortType: SortType) => void;
  }>;
  rows: Array<Record<string, DisplayValue>>;
}

export const Table = <T,>({ columns, rows }: TableProps<T>) => {
  const [sortType, setSortType] = useState<SortType>('asc');

  const handleSort = (value: keyof T) => {
    const column = columns.find((col) => col.value === value);

    if (column && column.onSort) {
      column.onSort(value, sortType);
      setSortType(sortType === 'asc' ? 'desc' : 'asc');
    }
  };

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {columns.map(({ value, displayValue }) => {
            return (
              <th onClick={() => handleSort(value as keyof T)} key={value}>
                {displayValue}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            {columns.map(({ value }) => (
              <td key={value}>{item[value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
