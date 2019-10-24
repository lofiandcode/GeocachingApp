import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'white',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-button">
          {/* <i className="fas fa-bars"></i> */}
        </div>
        <NavLink
          to="/profile"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Profile</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Home/Login</NavLink>
        <NavLink
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Signup!</NavLink>
        <NavLink
          to="/caches"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Caches</NavLink>
        <NavLink
          to="/newcache"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >
          New Cache
        </NavLink>


        <NavLink
          to="/map"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Map</NavLink>
        <NavLink
          to="/newProfile"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Create Profile</NavLink>
      </div>
    )
  }
}
 
export default Navbar;