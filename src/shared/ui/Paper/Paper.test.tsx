import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Paper } from './Paper';

describe('Компонент Paper', () => {
  it('Должен корректно отрендериться', () => {
    render(<Paper>Тест</Paper>);
  });

  it('Должен применяться класс Paper к корневому тегу div', () => {
    const { container } = render(<Paper>Тест</Paper>);
    const divElem = container.querySelector('div');

    expect(divElem).toHaveClass('Paper');
  });

  it('Должен применяться класс className из пропса к корневому тегу div', () => {
    const { container } = render(<Paper className="testClass">test</Paper>);
    const divElem = container.querySelector('div');

    expect(divElem).toHaveClass('testClass');
  });

  it('Должен корректно отрендерить children', () => {
    render(<Paper>test</Paper>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
