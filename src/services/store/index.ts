import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from '../redux/shoppingCart';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
