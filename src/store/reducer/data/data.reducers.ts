import { PayloadAction } from '@reduxjs/toolkit';
import { IDataState, IStardbData } from '@src/interfaces';

const dataReducers = {
  setCurrentID: (
    state: IDataState,
    action: PayloadAction<{ currentID: string }>,
  ) => {
    state.currentID = action.payload.currentID;
  },
  setCurrentData: (
    state: IDataState,
    action: PayloadAction<{ currentData: IStardbData | null }>,
  ) => {
    state.currentData = action.payload.currentData;
  },
  setDataError: (
    state: IDataState,
    action: PayloadAction<{ error: string }>,
  ) => {
    state.errorData = action.payload.error;
  },
};

export { dataReducers };
