import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface WorkersType {
  workers: number;
}

const initialState: WorkersType = {
  workers: 0,
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
});

export const selectMarket = (state: RootState) => state.market;

export default marketSlice.reducer;
