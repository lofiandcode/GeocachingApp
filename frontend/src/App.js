import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
// import { Login, Signup } from "./components/login/index";
import Login from './components/login/Login'
import UserContainer from './containers/UserContainer';
import CacheContainer from './containers/CacheContainer';
import MapContainer from './containers/MapContainer';
import UserForm from './components/UserForm';
import Signup from './components/login/Signup';
import './App.css';
// import { render } from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  
  render() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/caches" component={CacheContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/newProfile" component={UserForm} />
          <Route exact path="/profile" component={UserContainer} />
          <Route exact path="/map" component={MapContainer} />
        </Switch>
      </div>
    </Router>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
  )};
};
export default App;