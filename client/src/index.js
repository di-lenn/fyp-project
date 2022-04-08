import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App.js';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createTheme({
    palette: {
       primary: {
          main: "#F22B29"
                 },
       secondary: {
          main: "#F2AF29"
                  },
       third: {
           main: "#88A0A8"
       }
    }
 });

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);