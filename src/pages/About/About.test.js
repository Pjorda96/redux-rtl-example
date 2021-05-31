import { render, cleanup, screen, initialState } from '../../testUtils';
import About from './About';
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

const renderAbout = ({
  defaultState = initialState,
  // store,
  route,
  history,
}) => render(
  <About />,
  { initialState: defaultState, store, route, history },
)

beforeEach(() => {
  renderAbout({});
})
afterEach(() => {
  cleanup();
})

test('renders About', () => {
  expect(renderAbout({})).not.toBeUndefined();
});

test('renders title', () => {
  expect(screen.getByText('about.title')).toBeInTheDocument();
});

test('renders store value', () => {
  expect(screen.getByTestId('value')).toHaveTextContent('About');
});
