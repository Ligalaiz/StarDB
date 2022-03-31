import { configureStore } from '@reduxjs/toolkit';
import { randomPlanetReducer, dataReducer, authReducer } from './reducer';

const store = configureStore({
  reducer: {
    randomPlanet: randomPlanetReducer,
    data: dataReducer,
    auth: authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
