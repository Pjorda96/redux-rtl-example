import { render, cleanup } from '../testUtils';
import App from './App';

let instance;
const defaultState = {
  basic: { value: '', inProgress: false, error: '' },
  info: { users: [], inProgress: false, error: '' },
};

function reducer(state = defaultState, action) {
  return { ...state };
}

beforeEach(() => {
  instance = render(<App />, reducer);
})
afterEach(() => {
  instance = null;
  cleanup();
})

test('renders App', () => {
  expect(instance).not.toBeUndefined();
});

/*test('renders App in about', () => {
  const about = render(
    render(<App />),
    reducer,
    {
      initialState: defaultState,
      router: '/about'
    }
  );

  expect(about).not.toBeUndefined();
});*/
