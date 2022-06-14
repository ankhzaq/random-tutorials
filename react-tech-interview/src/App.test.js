import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App/>);
  const btnApply = screen.getByTestId('btn-applyOperation');
  let currentValue = screen.getByTestId('currentValue').getAttribute('value');
  expect(currentValue).toBe("10")
  await fireEvent.click(btnApply)

  currentValue = screen.getByTestId('currentValue').getAttribute('value');
  expect(currentValue).toBe("20");
});
