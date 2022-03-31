import React, { FC } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { NavLink, useLocation } from 'react-router-dom';
import { useAction } from '@src/hooks/useAction';
import * as h from './Header.style';

const Header: FC = () => {
  const { isLogin } = useTypedUseSelector((state) => state.auth);
  const { sourceData } = useTypedUseSelector((state) => state.data);
  const { setCurrentData, setDataSource } = useAction();
  const { search } = useLocation();

  const handleClick = () => {
    setCurrentData({ currentData: null });
  };

  const handleClickData = () => {
    const source = sourceData === 'local' ? 'server' : 'local';
    setDataSource({ sourceData: source });
  };

  return (
    <header className="header" data-testid="header" css={h.header}>
      <div className="logo">
        <NavLink
          css={h.logo}
          className="logo"
          to={{
            pathname: '/',
            search: `${search}`,
          }}
          onClick={handleClick}
        >
          StarDB
        </NavLink>
      </div>
      <nav>
        <ul className="nav reset-list" css={h.nav}>
          <li>
            <NavLink
              css={h.navLink}
              className="nav__link"
              to={{
                pathname: '/people',
                search: `${search}`,
              }}
              onClick={handleClick}
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              css={h.navLink}
              className="nav__link"
              to={{
                pathname: '/planets',
                search: `${search}`,
              }}
              onClick={handleClick}
            >
              Planets
            </NavLink>
          </li>
          <li>
            <NavLink
              css={h.navLink}
              className="nav__link"
              to={{
                pathname: '/starships',
                search: `${search}`,
              }}
              onClick={handleClick}
            >
              Starships
            </NavLink>
          </li>
          <li>
            <NavLink
              css={h.navLink}
              className="nav__link"
              to={{
                pathname: '/login',
                search: `${search}`,
              }}
              onClick={handleClick}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              css={h.navLink}
              className="nav__link"
              to={{
                pathname: '/secret',
                search: `${search}`,
              }}
              onClick={handleClick}
            >
              Secret
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        disabled={!isLogin}
        onClick={handleClickData}
        data-testid="changeService"
        css={h.btn}
      >
        Change Service
      </button>
    </header>
  );
};

export { Header };
