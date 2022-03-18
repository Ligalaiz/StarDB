import React from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/react';
import { globalStyle } from '@src/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderAppUtils } from '@utils/renderApp.utils';

render(
  <Router>
    <div className="container">
      <Global styles={globalStyle} />
      {renderAppUtils()}
    </div>
  </Router>,
  document.getElementById('root'),
);
