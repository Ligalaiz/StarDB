import { createSlice } from '@reduxjs/toolkit';
import { dataRequest } from '@src/module';
import { dataReducers } from './data.reducers';
import { IDataState } from '@src/interfaces';

const dataState = {
  data: [],
  currentData: null,
  currentID: null,
  loadingData: false,
  errorData: null,
} as IDataState;

const dataSlice = createSlice({
  name: 'data',
  initialState: dataState,
  reducers: dataReducers,
  extraReducers: (builder) => {
    builder.addCase(dataRequest.pending, (state) => {
      state.loadingData = true;
      state.errorData = null;
    });

    builder.addCase(dataRequest.fulfilled, (state, action) => {
      const result = action.payload.results;

      state.loadingData = false;
      state.data = result;
    });

    builder.addCase(dataRequest.rejected, (state, action) => {
      state.loadingData = false;
      state.errorData = action.payload as string;
    });
  },
});

const { actions: dataActions, reducer: dataReducer } = dataSlice;

export { dataReducer, dataActions };
