import { render, cleanup, initialState } from '../testUtils';
import App from './App';
import store from '../redux/store';

const renderApp = ({
  defaultState = initialState,
  // store,
  route,
  history,
}) => render(
  <App />,
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
