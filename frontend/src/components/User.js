import React, { Component } from 'react';
import { Media } from "react-bootstrap";

class User extends Component {
    render() {
        return(
            <Media>
                <Media.Body>
                    <h4>
                    {this.props.currentUser.username}
                    </h4>
                    <h6>
                    {this.props.currentUser.bio}</h6>
                    {/* edit button */}
                </Media.Body>
                <img 
                width={250}
                height={250}
                className="align-self-start mr-3"
                src={this.props.currentUser.photo}
                alt="user photo"/>
                
            </Media>
        )
    }
}
export default User;