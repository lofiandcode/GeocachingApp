import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Login from './Login'
import UserContainer from './containers/UserContainer';
import CacheBrowser from './containers/CacheBrowser';
import MapContainer from './containers/MapContainer';
import CacheProfCont from './containers/CacheProfCont';
import './App.css';
// import { render } from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      caches: []
    }  
  }

  componentDidMount() {
    fetch("http://localhost:3000/caches")
    .then(resp => resp.json())
    .then((data) => {
      this.setState({
        caches: data
      })
    })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/caches" component={() => <CacheBrowser caches={this.state.caches} />} />

          <Route
            path="/caches/:id"
            render={props => (
              <CacheProfCont {...props} caches={this.state.caches} />
            )}
          />



          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={UserContainer} />
          <Route exact path="/map" component={MapContainer} />
        </div>
      </Router>
    )
  }
}