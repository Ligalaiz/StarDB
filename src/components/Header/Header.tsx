import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAction } from '@src/hooks/useAction';
import * as h from './Header.style';

const Header: FC = () => {
  const { search } = useLocation();
  const { setCurrentData } = useAction();

  const handleClick = () => {
    setCurrentData({ currentData: null });
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
      <button data-testid="changeService" css={h.btn}>
        Change Service
      </button>
    </header>
  );
};

export { Header };
