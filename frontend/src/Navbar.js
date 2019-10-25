import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 2px 2px',
  textDecoration: 'none',
  color: 'black',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <DropdownMenu>
      <div>
        <div className="menu-button">
        </div>
        {/* <MenuItem> formerly <NavLink> */}
        <MenuItem text="Profile"
          location="/profile"
          exact
          style={link}
          activeStyle={{
            background: 'green'
          }}
        >Profile</MenuItem>
        {/* <MenuItem text="Home/Login"
          location="/login"
          exact
          style={link}
          activeStyle={{
            background: 'green'
          }}
        >Home/Login</MenuItem> */}
        {/* <MenuItem text="Signup!"
          location="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'green'
          }}
        >Signup!</MenuItem> */}
        <MenuItem text="Caches"
          location="/caches"
          exact
          style={link}
          activeStyle={{
            background: 'green'
          }}
        >Caches</MenuItem>
        <MenuItem text="Map"
          location="/map"
          exact
          style={link}
          activeStyle={{
            background: 'green'
          }}
        >Map</MenuItem>
        {/* <MenuItem text="Create Profile"
          location="/newProfile"
          exact
          style={link}
          activeStyle={{
            background: 'green'
          }}
        >Create Profile</MenuItem> */}
      </div>
      </DropdownMenu>
    )
  }
}
 
export default Navbar;