import React, { Component } from "react";
import Login from './components/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import "./index.css";
import CacheBrowser from "./containers/CacheBrowser";
import CacheProfCont from "./containers/CacheProfCont";
import Signup from "./components/login/Signup"
import style from "./components/login/style.scss"
import MapContainer from "./containers/MapContainer";
import Navbar from "./Navbar";
// import Signup from './components/login/Signup';
import UserContainer from "./containers/UserContainer";
import UserForm from './components/UserForm';
import CacheNewForm from './components/CacheNewForm'


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

  fetchCaches = () =>
    fetch("http://localhost:3000/caches")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          caches: data,
        });
      });

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
          
          <Route
            exact path="/login"
            render={() => {
              return (
                <Login />
              )
            }}
          />
          <Route
            exact path="/signup"
            render={() => {
              return (
                <Signup />
              )
            }}
          />
          <Route
            exact path="/caches"
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
          <Route exact path="/map" component={() => <MapContainer caches={this.state.caches}/>} />
        </div>
      </Router>
    );
  }
}
