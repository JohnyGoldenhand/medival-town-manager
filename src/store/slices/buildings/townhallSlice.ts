import { createSlice } from '@reduxjs/toolkit';
import { buildingsData } from 'data/buildingsData';
import { RootState } from 'store/store';
import { buildingType } from 'types/building';

export interface TownhallType {
  buildingsToDevelop: Array<buildingType>;
}

const initialState: TownhallType = {
  buildingsToDevelop: buildingsData,
};

export const townhallSlice = createSlice({
  name: 'townhall',
  initialState,
  reducers: {
    levelUp: (state, { payload }) => {
      const buildingToLevelIndex = state.buildingsToDevelop.findIndex(
        (building) => building.id === payload
      );
      if (buildingToLevelIndex !== -1) {
        const buildingsTemp = [...state.buildingsToDevelop];
        buildingsTemp[buildingToLevelIndex].level += 1;
        state.buildingsToDevelop = buildingsTemp;
      }
    },
  },
});

export const { levelUp } = townhallSlice.actions;

export const SelectTownhall = (store: RootState) => store.townhall;

export default townhallSlice.reducer;
