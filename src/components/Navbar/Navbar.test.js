import { render, cleanup, screen, initialState } from '../../testUtils';
import Navbar from './Navbar';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const renderNav = ({
  defaultState = initialState,
  store,
  route,
  history,
}) => render(
  <Navbar />,
  { initialState: defaultState, store, route, history },
)

beforeEach(() => {
  renderNav({});
})
afterEach(() => {
  cleanup();
})

test('renders Navbar', () => {
  expect(renderNav({})).not.toBeUndefined();
});

test('renders home Link', () => {
  expect(screen.getByText('navbar.home')).toBeInTheDocument();
});

test('renders store value', () => {
  cleanup();
  const value = 'value';
  const newState = {
    ...initialState,
    basic: {
      ...initialState.basic,
      value,
    }
  }
  renderNav({ defaultState: newState });

  expect(screen.getByTestId('this-page')).toHaveTextContent(value);
});

test('renders store no error', () => {
  expect(screen.getByTestId('error')).toHaveTextContent('all OK');
});

test('renders store error', () => {
  cleanup();
  const error = 'error';
  const newState = {
    ...initialState,
    basic: {
      ...initialState.basic,
      error,
    }
  }
  renderNav({ defaultState: newState });

  expect(screen.getByTestId('error')).toHaveTextContent(error);
});

test('renders store not in progress', () => {
  expect(screen.queryByText('In progress')).toBeNull();
});

test('renders store in progress', () => {
  cleanup();
  const newState = {
    ...initialState,
    basic: {
      ...initialState.basic,
      inProgress: true,
    }
  }
  renderNav({ defaultState: newState });
  expect(screen.queryByText('In progress')).not.toBeNull();
});
