
import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import "./index.css";
import CacheBrowser from "./containers/CacheBrowser";
import CacheProfCont from "./containers/CacheProfCont";
import MapContainer from "./containers/MapContainer";
import Navbar from "./Navbar";
import Signup from './components/login/Signup';
import UserContainer from "./containers/UserContainer";
import UserForm from './components/UserForm';

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
        <Switch>
          {/* <DropdownMenu > */}
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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/newProfile" component={UserForm} />
          <Route exact path="/profile" component={() =>       
            <UserContainer users={this.state.users} caches={this.state.caches} 
            // currentUser={this.state.currentUser}
            />
            } />
          <Route exact path="/map" component={MapContainer} />
          {/* </DropdownMenu> */}
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