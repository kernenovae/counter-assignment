// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
// Render the Counter component here
render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
const counterHeading = screen.getByRole('heading', {name: /counter/i});
expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
const countValue = screen.getByTestId('count');
expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
const incrementButton = screen.getByRole('button', { name: '+' });
fireEvent.click(incrementButton);
const countValue = screen.getByTestId('count');
expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
const incrementButton = screen.getByRole('button', { name: '+' });
//on click count = 1
fireEvent.click(incrementButton);
const decrementButton = screen.getByRole('button', { name: '-' });
//on click count - 1
fireEvent.click(decrementButton);
const countValue = screen.getByTestId('count');
expect(countValue).toHaveTextContent('0');
});
