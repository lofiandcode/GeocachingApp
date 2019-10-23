import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import UserContainer from "./containers/UserContainer";
import CacheBrowser from "./containers/CacheBrowser";
import MapContainer from "./containers/MapContainer";
import CacheProfCont from "./containers/CacheProfCont";
import "./App.css";
// import { render } from 'react-dom';
import "./index.css";
// import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      caches: []
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
          currentCache: {}
        });
      });

  handleCacheClick = id => {
    this.fetchCaches().then(() => {
      this.setState(
        prevState => {
          let foundCache = {};
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

          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={UserContainer} />
          <Route exact path="/map" component={MapContainer} />
        </div>
      </Router>
    );
  }
}
