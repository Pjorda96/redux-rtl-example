import { render, cleanup } from '@testing-library/react';
import Spinner from './Spinner';

let instance;

beforeEach(() => {
  instance = render(<Spinner />);
})
afterEach(() => {
  instance = null;
  cleanup();
})

test('renders Spinner', () => {
  expect(instance).not.toBeUndefined();
});
