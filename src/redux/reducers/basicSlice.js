import { createSlice } from '@reduxjs/toolkit'

export const basicSlice = createSlice({
  name: 'basic',
  initialState: {
    value: '',
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
    setValue: (state, action) => {
      state.value = action.payload ?? '';
    },
  },
});

export const { toggleInProgress, toggleError, setValue } = basicSlice.actions;

export const setValueAsync = title =>  async dispatch => {
  dispatch(toggleInProgress(true));

  try {
    dispatch(setValue(title));
  } catch (err) {
    dispatch(toggleError('Error: ' + err));
  }

  setTimeout(() => {
    dispatch(toggleError(''));
  }, 3000);

  dispatch(toggleInProgress(false));
};

export default basicSlice.reducer
