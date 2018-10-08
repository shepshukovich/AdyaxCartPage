import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Cart } from './Landing.jsx';


const App = () => (
<BrowserRouter>
  <Route exact path="/" component={ Cart } />
</BrowserRouter>
);


ReactDOM.render(<App />, document.getElementById("cart"));
