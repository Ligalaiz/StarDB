import { createSlice } from '@reduxjs/toolkit';
import { stardbRequest } from '@src/module';
import { randomPlanetReducers } from './randomPlanet.reducers';
import { IStardbState } from '@src/interfaces';

export const stardbState = {
  dataRandom: null,
  loadingRandom: false,
  errorRandom: null,
  randomCurrentID: null,
} as IStardbState;

const randomPlanetSlice = createSlice({
  name: 'randomPlanet',
  initialState: stardbState,
  reducers: randomPlanetReducers,
  extraReducers: (builder) => {
    builder.addCase(stardbRequest.pending, (state) => {
      state.loadingRandom = true;
      state.errorRandom = null;
    });

    builder.addCase(stardbRequest.fulfilled, (state, action) => {
      state.loadingRandom = false;
      state.dataRandom = action.payload;
    });

    builder.addCase(stardbRequest.rejected, (state, action) => {
      state.loadingRandom = false;
      state.errorRandom = action.payload as string;
    });
  },
});

const { actions: randomPlanetActions, reducer: randomPlanetReducer } =
  randomPlanetSlice;

export { randomPlanetReducer, randomPlanetActions };
