import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import './index.css';

// Pages
import Home from './eventoInspiraBoaVista/pages/Home/index';
import Registro from './eventoInspiraBoaVista/pages/Registro/index';
import Obrigado from './eventoInspiraBoaVista/pages/Obrigado/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/obrigado" component={Obrigado} />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
