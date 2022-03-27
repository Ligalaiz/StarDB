import React from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/react';
import { globalStyle } from '@src/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderAppUtils } from '@utils/renderApp.utils';
import { store } from '@src/store';

render(
  <Router>
    <Provider store={store}>
      <div className="container">
        <Global styles={globalStyle} />
        {renderAppUtils()}
      </div>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
