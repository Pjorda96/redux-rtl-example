import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    users: [],
    inProgress: false,
    error: '',
  },
  reducers: {
    toggleInProgress: (state, action) => {
      state.inProgress = action.payload ?? !state.inProgress;
    },
    toggleError: (state, action) => {
      state.error = action.payload ?? '';
    },
    setUsers: (state, action) => {
      state.users = action.payload ?? [];
    },
  },
});

export const { toggleInProgress, toggleError, setUsers } = infoSlice.actions;

export const setUsersAsync = () =>  async dispatch => {
  dispatch(toggleInProgress(true));
  const users = [
    { id: 1 , name: 'Pablo' },
  ]

  try {
    dispatch(setUsers(users));
  } catch (err) {
    dispatch(toggleError('Error: ' + err));
  }

  setTimeout(() => {
    dispatch(toggleError(''));
  }, 3000);

  dispatch(toggleInProgress(false));
};

export default infoSlice.reducer
