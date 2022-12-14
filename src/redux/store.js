import { configureStore } from '@reduxjs/toolkit';
import imageListReducer from './imageListReducer';
import {legacy_createStore} from "redux"; //рассмотреть переход к configureStore


const store = configureStore({reducer: imageListReducer});

//const store = legacy_createStore(imageListReducer);

//console.log(store.getState());

export default store;
