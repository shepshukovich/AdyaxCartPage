import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from './Landing.jsx';
import { Provider } from 'react-redux';
import store from '../store.js';

const App = () => (
<BrowserRouter>
  <Provider store={ store }>
    <Route exact path="/" component={ Cart } />
  </Provider>
</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("cart"));
