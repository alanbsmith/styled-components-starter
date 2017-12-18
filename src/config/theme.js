import { darken, rgba } from 'polished';

// common colors
const chrome000 = '#FFFFFF';
const chrome600 = '#757575';
const chrome800 = '#424242';
const chrome900 = '#212121';
const blue = '#2196F3';
const deepPurple = '#673AB7';

const theme = {
  colors: {
    // ui colors
    background: chrome000,
    link: blue,
    linkHover: darken(0.2, blue),
    linkVisited: darken(0.2, deepPurple),
    text: chrome800,
    overlay: rgba(chrome900, 0.85),
    shadow: rgba(chrome600, 0.4),
    shadowLight: rgba(chrome600, 0.2),

    // material ui color palette
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    deepPurple: '#673AB7',
    indigo: '#3F51B5',
    blue,
    lightBlue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deepOrange: '#FF5722',
    brown: '#795548',
    blueGrey: '#607D8B',

    // material ui grayscale
    chrome000,
    chrome100: '#F5F5F5',
    chrome200: '#EEEEEE',
    chrome300: '#E0E0E0',
    chrome400: '#BDBDBD',
    chrome500: '#9E9E9E',
    chrome600,
    chrome700: '#616161',
    chrome800,
    chrome900,
  },
  dimensions: {
    baseFontSize: 16,
    baseGrid: 8,
  },
  fonts: {
    primary: 'Open Sans',
    primaryFallback: 'Helvetica, Arial, sans-serif',
  },
};

export default theme;
