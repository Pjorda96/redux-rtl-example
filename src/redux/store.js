import { configureStore } from '@reduxjs/toolkit';
import basicReducer from "./reducers/basicSlice";
import infoReducer from "./reducers/infoSlice";

export default configureStore({
  reducer: {
    basic: basicReducer,
    info: infoReducer,
  },
  devTools: true,
})
