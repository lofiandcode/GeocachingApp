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
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'royalblue'
          }}
        >Former Home</NavLink>
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
          to="/caches"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Caches</NavLink>
        <NavLink
          to="/map"
          exact
          style={link}
          activeStyle={{
            background: 'royalblue'
          }}
        >Map</NavLink>
      </div>
    )
  }
}
 
export default Navbar;