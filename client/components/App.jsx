import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from './Landing.jsx';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store.js';
import { store } from '../store.js';


class App extends React.Component {
  constructor(props) {
    super(props)
}

  render() {
    return(
      <BrowserRouter>
        <Provider store={ store }>
          <PersistGate loading={null} persistor={ persistor }>
            <Route exact path="/" component={ Cart } />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
  }

  // componentDidMount() {
  //   console.log(this.props.children);
  // }
}


ReactDOM.render(<App />, document.getElementById("cart"));
