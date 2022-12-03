import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface WorkersType {
  currentlyAvilable: number;
  maxAvilable: number;
}

const initialState: WorkersType = {
  currentlyAvilable: 10,
  maxAvilable: 10,
};

export const workersSlice = createSlice({
  name: 'workers',
  initialState,
  reducers: {
    dispatchWorkers: (state, { payload }) => {
      state.currentlyAvilable -= payload;
    },
    returnWorkers: (state, { payload }) => {
      state.currentlyAvilable += payload;
    },
  },
});

export const { dispatchWorkers, returnWorkers } = workersSlice.actions;
export const SelectWorkers = (state: RootState) => state.workers;

export default workersSlice.reducer;
