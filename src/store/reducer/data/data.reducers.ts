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
  setDataSource: (
    state: IDataState,
    action: PayloadAction<{ sourceData: 'local' | 'server' }>,
  ) => {
    state.sourceData = action.payload.sourceData;
    console.log(state.sourceData);
  },
  setSource: (
    state: IDataState,
    action: PayloadAction<{ data: IStardbData[] }>,
  ) => {
    state.data = action.payload.data;
    console.log(state.data);
  },
  setDataError: (
    state: IDataState,
    action: PayloadAction<{ error: string }>,
  ) => {
    state.errorData = action.payload.error;
  },
};

export { dataReducers };
