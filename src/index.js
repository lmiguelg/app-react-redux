import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap.min.css';
import configureStore from './redux/configureStore'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router><App /></Router>
  </ReduxProvider>,
  document.getElementById('root')
);
