import React, { FC } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { useNavigate } from 'react-router-dom';
import * as l from './LoginPage.style';

const LoginPage: FC = () => {
  const { isLogin } = useTypedUseSelector((state) => state.auth);
  const { login, logout } = useAction();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogin) {
      logout();
    } else {
      login();
    }
    navigate('/');
  };

  return (
    <div data-testid="loginPage">
      {!isLogin ? (
        <p css={l.title}>Please login before u can use our site</p>
      ) : null}
      <button onClick={handleClick} css={l.btn}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export { LoginPage };
