import React from 'react';

import styles from './Table.module.scss';

interface TableProps {
  tableHead: Array<any>;
  tableBody: Array<{ [key: string]: any }>;
}

export const Table: React.FC<TableProps> = ({ tableHead, tableBody }) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {tableHead.map((item, index) => {
            return <th key={index?.toString()}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((row, index) => (
          <tr key={index?.toString()}>
            {Object.values(row).map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
