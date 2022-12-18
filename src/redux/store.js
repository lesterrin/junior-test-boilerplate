import {configureStore} from '@reduxjs/toolkit';
import imageListReducer from './imageListReducer';
import thunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: imageListReducer
});

export default store;
