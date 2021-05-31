import { render, cleanup, screen, initialState } from '../../testUtils';
import Home from './Home';
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

const renderHome = ({
  defaultState = initialState,
  // store,
  route,
  history,
}) => render(
  <Home />,
  { initialState: defaultState, store, route, history },
)

beforeEach(() => {
  renderHome({});
})
afterEach(() => {
  cleanup();
})

test('renders Home', () => {
  expect(renderHome({})).not.toBeUndefined();
});

test('renders title', () => {
  expect(screen.getByText('home.title')).toBeInTheDocument();
});

test('renders button', () => {
  const button = screen.getByText('home.trigger');

  expect(button).toBeInTheDocument();
});

// TODO: spy fireEvent
/*test('button click calls setUsersAsync', () => {
  cleanup();
  const instance = renderHome({});
  const button = screen.getByText('home.trigger');
  const setUsersAsync = jest.spyOn(instance, 'setUsersAsync');

  fireEvent(button, new MouseEvent('click'));

  expect(setUsersAsync).toHaveBeenCalled()
});*/
