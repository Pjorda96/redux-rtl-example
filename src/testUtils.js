import React, { Suspense } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render as rtlRender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import Spinner from './components/Spinner';

export const initialState = {
  basic: { value: '', inProgress: false, error: '' },
  info: { users: [], inProgress: false, error: '' },
};

function reducer(state = initialState, action) {
  return { ...state };
}

export function render(
  component,
  {
    initialState: defaultState,
    store = createStore(reducer, defaultState),
    route = '/',
    history = createMemoryHistory({initialEntries: [route]}),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Spinner />}>
            {children}
          </Suspense>
        </Router>
      </Provider>
    )
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action)
}

export const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()

  const invoke = action => thunk(store)(next)(action);

  return { store, next, invoke }
}

export * from '@testing-library/react'
