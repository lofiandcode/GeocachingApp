import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Login from './Login'
import UserContainer from './containers/UserContainer';
import CacheContainer from './containers/CacheContainer';
import MapContainer from './containers/MapContainer';
import './App.css';
// import { render } from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/caches" component={CacheContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserContainer} />
        <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
  )
};
export default App;