import React, { FC } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import * as l from './LoginPage.style';

const LoginPage: FC = () => {
  const { isLogin } = useTypedUseSelector((state) => state.auth);
  const { login, logout } = useAction();

  const handleClick = () => {
    if (isLogin) {
      logout();
    } else {
      login();
    }
  };

  return (
    <div data-testid="loginPage">
      <p css={l.title}>Please login before u can use our site</p>
      <button onClick={handleClick} css={l.btn}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export { LoginPage };
