import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';


//CSS and external deps
import 'jQuery';
import 'tether';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import "../node_modules/toastr/build/toastr.min.css";
import './styles/styles.css';
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
