import { createSlice } from '@reduxjs/toolkit';
import { authReducers } from './auth.reducers';

interface IAuthState {
  isLogin: boolean;
}

const authState = {
  isLogin: false,
} as IAuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: authReducers,
});

const { actions: authActions, reducer: authReducer } = authSlice;

export { authReducer, authActions };
