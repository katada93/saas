import styles from './Table.module.scss';

type DisplayValue = string | number | JSX.Element;

interface TableProps {
  header: Array<{
    value: string;
    displayValue: DisplayValue;
    onSort?: (value: string, sort?: 'asc' | 'desc') => void;
  }>;
  data: Array<Record<string, DisplayValue>>;
}

export const Table = ({ header, data }: TableProps) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {header.map(({ value, displayValue, onSort }) => {
            return (
              <th
                onClick={onSort ? () => onSort(value) : undefined}
                key={value}>
                {displayValue}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            {header.map(({ value }) => (
              <td key={value}>{item[value]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
