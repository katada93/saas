import React from 'react';

import styles from './Table.module.scss';

interface TableProps {
  data: Array<{ [key: string]: any }>;
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {Object.values(row).map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
