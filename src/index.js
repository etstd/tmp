import './startup/styles';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import registerServiceWorker from './startup/registerServiceWorker';
import theme from './libs/theme';
import App from './components/app';

const Root = (
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));

registerServiceWorker();
