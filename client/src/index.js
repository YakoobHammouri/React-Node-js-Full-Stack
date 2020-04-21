import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
//import { red, amber } from '@material-ui/core/colors';
import { blue, pink } from '@material-ui/core/colors';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#022539',
//     },
//     primary2: {
//       main: '#FB991C',
//     },
//     secondary: {
//       main: '#1C7690',
//     },
//   },
// });

// const theme = createMuiTheme({
//   palette: {
//     primary: red,
//     secondary: {
//       main: amber[500],
//     },
//   },
// });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#022539',
      // main: '#007a7a',
    },
    // success: {
    //   main: '#FB991C',
    // },
    secondary: {
      main: '#1C7690',
      //main: '#F9AA33',

      //main: '#FB991C',
    },

    colors: {
      menuHeader: '#FB991C',
      white: '#fff',
      black: '#000',
    },
  },
});

console.log(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);
