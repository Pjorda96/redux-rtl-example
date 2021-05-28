import { render, cleanup } from '@testing-library/react';
import Spinner from './Spinner';

const renderSpinner = () => render(<Spinner />);

beforeEach(() => {
  render(<Spinner />);
})
afterEach(() => {
  cleanup();
})

test('renders Spinner', () => {
  expect(renderSpinner()).not.toBeUndefined();
});
