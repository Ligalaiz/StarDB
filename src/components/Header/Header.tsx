import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as h from './Header.style';

const Header: FC = () => {
  const { search } = useLocation();

  return (
    <header className="header" data-testid="header">
      <div className="logo">
        <NavLink
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
        <ul className="nav">
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/people',
                search: `${search}`,
              }}
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/planets',
                search: `${search}`,
              }}
            >
              Planets
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/starships',
                search: `${search}`,
              }}
            >
              Starships
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/login',
                search: `${search}`,
              }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              to={{
                pathname: '/secret',
                search: `${search}`,
              }}
            >
              Secret
            </NavLink>
          </li>
        </ul>
      </nav>
      <button data-testid="changeService">Change Service</button>
    </header>
  );
};

export { Header };
