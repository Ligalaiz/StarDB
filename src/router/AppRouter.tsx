import React, { FC } from 'react';
import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RequireAuth } from '@src/HOC/RequireAuth';
import { routes } from '@src/router/routes';
import { Layout } from '@src/screens/Layout';
import { NotFoundPage } from '@components/NotFoundPage';
import { LoginPage } from '@components/LoginPage';

const AppRouter: FC = () => {
  const location = useLocation();
  const match = useMatch(location.pathname);

  return (
    <TransitionGroup>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <RequireAuth>
                    <CSSTransition
                      in={match != null}
                      timeout={1000}
                      classNames="page"
                    >
                      {route.element}
                    </CSSTransition>
                  </RequireAuth>
                }
              />
            );
          })}
          <Route
            path="login"
            element={
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
              >
                <LoginPage />
              </CSSTransition>
            }
          />
          <Route
            path="error"
            element={
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
              >
                <NotFoundPage />
              </CSSTransition>
            }
          />
          <Route
            path="*"
            element={
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
              >
                <NotFoundPage />
              </CSSTransition>
            }
          />
        </Route>
      </Routes>
    </TransitionGroup>
  );
};

export { AppRouter };
