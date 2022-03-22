import { configureStore } from '@reduxjs/toolkit';
import { randomPlanetReducer, dataReducer } from './reducer';

const store = configureStore({
  reducer: { randomPlanet: randomPlanetReducer, data: dataReducer },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
