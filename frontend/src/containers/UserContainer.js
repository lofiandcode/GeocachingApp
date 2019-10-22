import React, { Component } from 'react';
import User from '../components/User';
import UserCachesContainer from './UserCachesContainer';

class UserContainer extends Component {
    // state = {

    // }

    render() {
        return(
            <div>
                <User />
                <UserCachesContainer />
            </div>
        ) 
    }

}
export default UserContainer;