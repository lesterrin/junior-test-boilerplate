import { configureStore } from '@reduxjs/toolkit';
import imageListReducer from './imageListReducer';

const preloadedState = {
    todos: [
        {
            text: 'Eat food',
            completed: true,
        },
        {
            text: 'Exercise',
            completed: false,
        },
    ],
    visibilityFilter: 'SHOW_COMPLETED',
}

const store = configureStore({reducer: imageListReducer});

console.log(store.getState());

export default store;
