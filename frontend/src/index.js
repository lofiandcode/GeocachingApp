import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import CacheContainer from './containers/CacheContainer';
import MapContainer from './containers/MapContainer';

ReactDOM.render(
    <div>
    <Router>
        <Navbar />
        <App />
        <Route exact path="/caches" component={CacheContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserContainer} />
        <Route exact path="/map" component={MapContainer} />
    </Router>
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
