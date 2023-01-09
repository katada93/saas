import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Paper } from './Paper';

describe('Компонент Paper', () => {
  it('Должен корректно отрендериться', () => {
    render(<Paper>test</Paper>);
  });

  it('Должен применяться класс Paper к корневому тегу div', () => {
    render(<Paper>test</Paper>);

    expect(screen.getByText('test')).toHaveClass('Paper');
  });

  it('Должен применяться класс className из пропса к корневому тегу div', () => {
    render(<Paper className="testClass">test</Paper>);
    expect(screen.getByText('test')).toHaveClass('testClass');
  });

  it('Должен корректно отрендерить children', () => {
    render(<Paper>test</Paper>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
