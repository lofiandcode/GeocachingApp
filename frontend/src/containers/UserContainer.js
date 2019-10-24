import React, { Component } from 'react';
import User from '../components/User';
import UserCachesContainer from './UserCachesContainer'

// this is the USER PROFILE
class UserContainer extends Component {
    constructor() {
        super();
        this.state = {
            // users: [],
            // all_caches: [],
            cache_index: 0,
            // favorite_caches: [],
            // todos: [],
            // completed: []
            users:[],
            currentUser: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/users")
        // .then(response=>{
        //     console.log(response.data);
        //     if (!response.data.length) {
        //       this.setState({noData: true}) 
        //     } else {
        //       this.setState({
        //         data:response.data, noData: false
        //       })
        //     }
        //   })
        .then(resp => resp.json())
        // .then((data) => {
        //   this.setState({
        //     users: data,
        //     currentUser: data[0]
        //   })
        // }) 
    };
    
    displayFive = () => {
        // return this.props.caches.slice(this.state.cache_index, this.state.cache_index + 4)
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
                currentUser={this.state.currentUser}
                />
                <br></br>
                <strong>{this.state.currentUser.username}'s Caches:</strong>
                <br></br>
                <UserCachesContainer 
                users={this.state.users}
                currentUser={this.state.currentUser}
                caches={this.displayFive()}
                fourMore={this.fourMore}
                />
            </div> 
        ) 
    }

}
export default UserContainer;