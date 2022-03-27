import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { RandomPlanet } from '@modules/RandomPlanet';
import { errorBoundary } from '@src/HOC/errorBoundary';

const HeaderWithErrorBoundary = errorBoundary(Header);
const RandomPlanetWithErrorBoundary = errorBoundary(RandomPlanet);

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <HeaderWithErrorBoundary />
        <RandomPlanetWithErrorBoundary />
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
