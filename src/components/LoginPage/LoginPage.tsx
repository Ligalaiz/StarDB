import React, { FC } from 'react';
import * as l from './LoginPage.style';

const LoginPage: FC = () => {
  return (
    <div data-testid="loginPage">
      <p css={l.title}>Login to see secret page!</p>
      <button css={l.btn}>Login</button>
    </div>
  );
};

export { LoginPage };
