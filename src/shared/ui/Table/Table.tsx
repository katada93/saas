import React from 'react';

import styles from './Table.module.scss';

type DisplayValue = string | number | JSX.Element;

interface TableProps {
  header: Array<{ value: string; displayValue: DisplayValue }>;
  data: Array<Record<string, DisplayValue>>;
}

export const Table = ({ header, data }: TableProps) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {header.map(({ value, displayValue }) => {
            return <th key={value}>{displayValue}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.email as string}>
            {header.map(({ value }) => (
              <td key={value}>{user[value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
