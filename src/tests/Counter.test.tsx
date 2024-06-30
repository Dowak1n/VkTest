import { render } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter component', () => {
  it('renders single-digit count correctly', () => {
    const { getByText } = render(<Counter count={5} />);
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('5')).toHaveClass('single-digit');
  });

  it('renders multi-digit count correctly', () => {
    const { getByText } = render(<Counter count={123} />);
    expect(getByText('123')).toBeInTheDocument();
    expect(getByText('123')).toHaveClass('more-digit');
  });

  it('renders "99+" for counts greater than 99', () => {
    const { getByText } = render(<Counter count={150} />);
    expect(getByText('99+')).toBeInTheDocument();
    expect(getByText('99+')).toHaveClass('more-digit');
  });
});