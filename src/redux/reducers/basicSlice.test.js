import store from '../store';
import { toggleInProgress, toggleError, setValue, setValueAsync } from './basicSlice';

// https://ogzhanolguncu.com/blog/testing-react-redux-toolkit-with-typescript

const getState = () => store.getState().basic;

describe('Toggle in progress', () => {
  const getInProgress = () => getState().inProgress;

  test('Default value', () => {
    expect(getInProgress()).toBeFalsy();
  })

  test('Toggle to true', () => {
    store.dispatch(toggleInProgress(true));

    expect(getInProgress()).toBeTruthy();
  })

  test('Toggle to nothing', () => {
    store.dispatch(toggleInProgress());

    expect(getInProgress()).toBeFalsy();
  })
})

describe('Change error', () => {
  const getError = () => getState().error;
  const defaultValue = '';

  test('Default value', () => {
    expect(getError()).toBe(defaultValue);
  })

  test('Change to something', () => {
    const error = 'error';
    store.dispatch(toggleError(error));

    expect(getError()).toBe(error);
  })

  test('Change to remove', () => {
    store.dispatch(toggleError());

    expect(getError()).toBe(defaultValue);
  })
})

describe('Change value', () => {
  const getValue = () => getState().value;
  const defaultValue = '';

  test('Default value', () => {
    expect(getValue()).toBe(defaultValue);
  })

  test('Change to something', () => {
    const value = 'value';
    store.dispatch(setValue(value));

    expect(getValue()).toBe(value);
  })

  test('Change to remove', () => {
    store.dispatch(setValue());

    expect(getValue()).toBe(defaultValue);
  })
})

/*test('Adds a new book', () => {
  let state = store.getState().book;
  const initialBookCount = state.bookList.length;

  store.dispatch(addNewBook({ id: '4', author: 'Tester', title: 'Testers manual' }));
  state = store.getState().book;
  const newlyAddedBook = state.bookList.find((book) => book.id === '4');
  expect(newlyAddedBook?.author).toBe('Tester');
  expect(newlyAddedBook?.title).toBe('Testers manual');
  expect(state.bookList.length).toBeGreaterThan(initialBookCount);
})*/
