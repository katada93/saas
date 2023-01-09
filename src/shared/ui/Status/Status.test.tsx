import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Status } from './Status';

describe('Status component', () => {
  it('Должен корректно отрендериться', () => {
    render(<Status>test</Status>);
  });

  it('Должны применяться классы Status и success к тегу span', () => {
    render(<Status>test</Status>);
    expect(screen.getByText('test')).toHaveClass(...['Status', 'success']);
  });

  it('Должен применяться класс className из пропса к тегу span', () => {
    render(<Status className="testClass">test</Status>);
    expect(screen.getByText('test')).toHaveClass('testClass');
  });

  it('Должен применяться класс из пропса color к тегу span', () => {
    render(<Status color="secondary">test</Status>);
    expect(screen.getByText('test')).toHaveClass('secondary');
  });

  it('Должен корректно отрендерить children', () => {
    render(<Status>test</Status>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
