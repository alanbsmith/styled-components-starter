import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';

import buildGlobalStyles from './config/buildGlobalStyles';
import configureFonts from './config/configureFonts';
import theme from './config/theme';

import App from './components/App';

injectGlobal([buildGlobalStyles(theme)]);
configureFonts(theme);

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  , document.getElementById('root')
);
