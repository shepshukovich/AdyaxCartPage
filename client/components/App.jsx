import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from 'Landing.jsx';


const App = () => (
<BrowserRouter>
  <Route exact path="/" component={Landing} />
</BrowserRouter>
);
