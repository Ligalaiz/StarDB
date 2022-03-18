import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { RandomPlanet } from '@components/RandomPlanet';

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <RandomPlanet />
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
