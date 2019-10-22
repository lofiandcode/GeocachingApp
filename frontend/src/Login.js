import React from 'react';
 
class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Welcome to the GeoCache App</h1>
        <label>Sign In:</label>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
        {/* button to create new account form button here: */}
        <p>Create Account...</p>
      </form>
    );
  }
}
 
export default Login;