import store from '../store';
import { toggleInProgress, toggleError, setUsers, setUsersAsync } from './infoSlice';

// https://ogzhanolguncu.com/blog/testing-react-redux-toolkit-with-typescript

const getState = () => store.getState().info;

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

describe('Change users', () => {
  const getUsers = () => getState().users;

  test('Default value', () => {
    expect(getUsers()).toHaveLength(0);
  })

  test('Change to something', () => {
    store.dispatch(setUsers(['value']));

    expect(getUsers()).toHaveLength(1);
  })

  test('Change to remove', () => {
    store.dispatch(setUsers());

    expect(getUsers()).toHaveLength(0);
  })
})

describe('Set users async', () => {
  const getUsers = () => getState().users;

  test('Default value', () => {
    store.dispatch(setUsersAsync());

    expect(getUsers()).toHaveLength(1);
  })

  // TODO: spy toggleInProgress
  // TODO: spy try/catch
})
