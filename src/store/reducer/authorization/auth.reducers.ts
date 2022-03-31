import { set } from '@src/utils';

interface IAuthState {
  isLogin: boolean;
}

const authReducers = {
  login: (state: IAuthState) => {
    state.isLogin = true;
    set('login', true);
  },
  logout: (state: IAuthState) => {
    state.isLogin = false;
    set('login', false);
  },
};

export { authReducers };
