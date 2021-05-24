import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './card';

export default configureStore({
  reducer: {
    card: cartReducer,
  },
});
