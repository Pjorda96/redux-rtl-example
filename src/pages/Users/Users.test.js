import { render, cleanup, screen, initialState } from '../../testUtils';
import Users from './Users';
import store from '../../redux/store';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const renderUsers = ({
  defaultState = initialState,
  // store,
  route,
  history,
}) => render(
  <Users />,
  { initialState: defaultState, store, route, history },
)

beforeEach(() => {
  renderUsers({});
})
afterEach(() => {
  cleanup();
})

test('renders Users', () => {
  expect(renderUsers({})).not.toBeUndefined();
});

test('renders title', () => {
  expect(screen.getByText('users.title')).toBeInTheDocument();
});

xtest('renders users error', () => {
  cleanup();
  const error = 'error';
  const newState = {
    ...initialState,
    info: {
      ...initialState.info,
      users: undefined,
      error,
    }
  }
  renderUsers({ defaultState: newState });

  expect(screen.getByText(error)).toBeInTheDocument();
});




test('renders get users link', () => {
  cleanup();
  const newState = {
    ...initialState,
    info: {
      ...initialState.info,
      users: [],
    }
  }
  renderUsers({ defaultState: newState });
  expect(screen.queryByText('users.getUsers')).toBeInTheDocument();
});
