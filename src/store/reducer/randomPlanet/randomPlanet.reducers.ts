import { PayloadAction } from '@reduxjs/toolkit';
import { IStardbState } from '@src/interfaces';

const randomPlanetReducers = {
  setRandomCurrentID: (
    state: IStardbState,
    action: PayloadAction<{ randomCurrentID: string }>,
  ) => {
    state.randomCurrentID = action.payload.randomCurrentID;
  },
  setRandomError: (
    state: IStardbState,
    action: PayloadAction<{ error: string }>,
  ) => {
    state.error = action.payload.error;
  },
};

export { randomPlanetReducers };
