import { render, cleanup } from '../testUtils';
import App from './App';
import store from '../redux/store';

const initialState = {
  basic: { value: '', inProgress: false, error: '' },
  info: { users: [], inProgress: false, error: '' },
};

function reducer(state = initialState, action) {
  return { ...state };
}

const renderApp = ({
  defaultState = initialState,
  // store,
  route,
  history,
}) => render(
  <App />,
  reducer,
  { initialState: defaultState, store, route, history },
)

beforeEach(() => {
  renderApp({});
})
afterEach(() => {
  cleanup();
})

test('renders App', () => {
  expect(renderApp({})).not.toBeUndefined();
});

// TODO: test routes
/*test('renders App in about', () => {
  cleanup();
  const about = renderApp({
    route: '/about/word'
  });

  expect(about).not.toBeUndefined();
});*/

/*test('renders App in about', () => {
  cleanup();
  const users = renderApp({
    route: '/users'
  });

  expect(users).not.toBeUndefined();
});*/
