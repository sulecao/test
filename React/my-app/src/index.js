import React from 'react';
import ReactDOM from 'react-dom';
import APP from './view/App'
import RandomQ from './view/RandomQ'
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store/index'
import { Provider } from 'react-redux'
import './assets/css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={APP} />
      <Route path="/randomQ" component={RandomQ} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


