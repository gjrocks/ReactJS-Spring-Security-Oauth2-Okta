import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import customtheme from './theme.json';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const custTheme = createMuiTheme(customtheme);

ReactDOM.render(<ThemeProvider theme={custTheme}>
    <App />
</ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  
