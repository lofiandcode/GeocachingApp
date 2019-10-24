import React from 'react';
import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import "./index.css";
import CacheBrowser from "./containers/CacheBrowser";
import CacheProfCont from "./containers/CacheProfCont";

import index from "./components/login/index"
import Login from "./components/login/Login"
import Signup from "./components/login/Signup"
import style from "./components/login/style.scss"
// import Login from "./Login";
// import Login from './components/login/Login'

import MapContainer from "./containers/MapContainer";
import Navbar from "./Navbar";
import React, { Component } from "react";
// import Signup from './components/login/Signup';
import UserContainer from "./containers/UserContainer";
import UserForm from './components/UserForm';
import CacheNewForm from './components/CacheNewForm'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      users: [],
      caches: [],
      currentCache: {}
      // currentUser: {}
    };
  };

// import { Login, Signup } from "./components/login/index";
// import { render } from 'react-dom';
// import * as serviceWorker from './serviceWorker';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      caches: [],
      currentCache: {},
      isLogginActive: true
    };
  }
  componentDidMount() {
    this.fetchCaches();
  }

  fetchCaches = () =>{
    fetch("http://localhost:3000/caches")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          caches: data
        });
      });
    };

  handleCacheClick = id => {
    this.fetchCaches().then(() => {
      this.setState(
        prevState => {
          let foundCache = prevState.currentCache;
          prevState.caches.forEach(cache => {
            if (cache.id == id) {
              foundCache = cache;
            }
          });
          return {currentCache: foundCache};
        }
      );
    });
  };

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Route exact path="/caches" component={() => <CacheBrowser caches={this.state.caches} />} handleCacheClick={this.handleCacheClick}/> */}
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={UserContainer} />
          <Route exact path="/map" component={MapContainer} />
          
          <Route

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route

            exact
            path="/caches"
            render={() => {
              return (
                <CacheBrowser
                  caches={this.state.caches}
                  handleCacheClick={this.handleCacheClick}
                />
              );
            }}
          />
         <Route
            path="/caches/:id"
            render={props => (
              <CacheProfCont
                {...props}
                handleCurrentCacheUpdate={this.handleCacheClick}
                cache={this.state.currentCache}
              />
            )}
          />


          <Route
            exact
            path="/newcache"
            render={() => {
              return (
                <CacheNewForm />
              );
            }}
          />

          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/profile" component={UserContainer} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/newProfile" component={UserForm} />
          <Route exact path="/profile" component={() =>       
            <UserContainer users={this.state.users} caches={this.state.caches} 
            // currentUser={this.state.currentUser}
            />
            } />

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
        </div>
      </Router>
    );
  }
}
