import React, { Component } from 'react';


class User extends Component {
    render() {
        return(
            <div>
                <h2>
                    Welcome back, {this.props.currentUser.username}!
                </h2>
                Photo:<div>
                <img src={this.props.currentUser.photo}></img>
                </div>
                {/* <div>first/last name?</div> */}
                Bio:<div>
                {this.props.currentUser.bio}
                </div>
                {/* edit button */}
            </div>
        )
    }
}
export default User;