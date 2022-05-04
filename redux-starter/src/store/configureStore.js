import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './bugs';

const store = configureStore({ reducer }, devToolsEnhancer({ trace: true }));

export default store;
