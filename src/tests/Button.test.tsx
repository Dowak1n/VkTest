import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  it('renders with initial state correctly', () => {
    const { getByText } = render(
      <Button>
        <Button.Label>Click Me</Button.Label>
        <Button.Counter>
          <span>0</span>
        </Button.Counter>
      </Button>
    );

    expect(getByText('Click Me')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });

  it('increments count and shows loader when clicked', async () => {
    const { getByText, getByTestId } = render(
      <Button>
        <Button.Label>Click Me</Button.Label>
        <Button.Counter>
          <span data-testid="count">0</span>
        </Button.Counter>
      </Button>
    );

    fireEvent.click(getByText('Click Me'));

    expect(getByTestId('count').textContent).toBe('0');
    expect(getByText('Click Me')).toBeDisabled();

    await waitFor(() => {
      expect(getByTestId('count').textContent).toBe('1');
      expect(getByText('Click Me')).not.toBeDisabled();
    });
  });
});