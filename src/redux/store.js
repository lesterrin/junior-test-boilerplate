import { configureStore } from '@reduxjs/toolkit';

import imageListReducer from './imageListReducer';

const store = configureStore({
  reducer: imageListReducer,
});

export default store;
