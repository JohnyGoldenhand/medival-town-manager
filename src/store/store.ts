import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './slices/buildings/marketSlice';
import townhallReducer from './slices/buildings/townhallSlice';
import workersReducer from './slices/buildings/workersSlice';

const store = configureStore({
  reducer: {
    townhall: townhallReducer,
    workers: workersReducer,
    market: marketReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
