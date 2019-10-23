import React, { Component } from 'react';
import User from '../components/User';
import UserCachesContainer from './UserCachesContainer';

// this is the USER PROFILE
class UserContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // users array holds: username, first, last, img_url, bio
            cache_index: 0
            // favorite_caches: [],
            // todos: [],
            // completed: []
        }
        console.log(this.props)
    }

    displayFive = () => {
        return this.props.caches.slice(this.state.cache_index, this.state.cache_index +4)
    };

    fourMore = (event) => {
        let newIndex = this.state.cache_index + 4;
        return this.setState({
          cache_index: newIndex + 4
        })
      };

    render() {
        return(
            <div>
                <User 
                
                />
                <br></br>
                user caches list here: 
                <br></br>...
                <UserCachesContainer 
                caches={this.displayFive()}
                fourMore={this.fourMore}
                />
            </div> 
        ) 
    }

}
export default UserContainer;