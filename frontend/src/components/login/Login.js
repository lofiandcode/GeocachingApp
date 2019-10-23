import React from 'react';
import UserForm from '../UserForm';
// import './style.scss';
 
class Login extends React.Component {

  goToForm() {
    return(
      <UserForm />
    )
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
      <form>
        <h1>Welcome to the GeoCache App!</h1>
        <div className="header">Sign in:</div>
        <div className="content">
        {/* <div className="image">
            <img src={loginImg} /> */}
        </div>
        <div className="form">
            <div className="form-group">
            <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
          </div>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>

        <br></br>
          {/* <button onClick={this.goToForm()}>Create Account!</button> */}
      </form>
      </div>
    );
  }
}
 
export default Login;