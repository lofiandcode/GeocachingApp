import React, { Component } from 'react';
import User from '../components/User';
import UserCachesContainer from './UserCachesContainer';

class UserContainer extends Component {
    constructor() {
        super();
        this.state = {
            // users: [],
            // all_caches: [],
            cache_index: 0,
            users:[],
            currentUser: {
                caches: [],
                cache_index: 0,
                displayCaches: []
            },
            displayCaches: []
        }
        // console.log(props)
    };

    componentDidMount() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then((data) => {
          this.setState({
            users: data,
            currentUser: data[0],
            displayCaches: data[0].caches
          })
        }) 
    };

    filterCaches = (type) => {
        if (type !== "All") {
            const x = this.state.currentUser.histories.filter(history => history[`${type}`]);
            const y = x.map(history => {
                return this.state.currentUser.caches.find(cache => cache.id === history.cache_id)
            });
            this.setState({ 
                displayCaches: y
            });
        } 
        else {
            this.setState({
                displayCaches: this.state.currentUser.caches
            })
        }
    };

    // sortCaches = (value) => {
    //     console.log("sort method fires")
    //     // if input value "alphabetical"..., if "price"...
    //     let arr = [];
    //     if (value === "Rating") {
    //       arr = this.state.displayCaches.sort((a, b) => a.name > b.name ? 1 : -1)
    //     }
    //     else if (value === "Difficulty") {
    //       arr = this.state.displayCaches.sort((a, b) => a.price > b.price ? 1 : -1)
    //     }
    //     this.setState({
    //       displayStocks: arr
    //     })
    //   };    
    
    // displayFive = () => {
    //     return this.state.caches.slice(this.state.cache_index, this.state.cache_index + 4)
    // };

    // fourMore = (event) => {
    //     let newIndex = this.state.cache_index + 4;
    //     return this.setState({
    //       cache_index: newIndex + 4
    //     })
    //   };

    render() {
        return(
            <div>
                <User 
                currentUser={this.state.currentUser}
                />
                <br></br>
                <strong>You! {this.state.currentUser.username}'s Caches:</strong>
                <br></br>
                <UserCachesContainer 
                    filterCaches={this.filterCaches}
                    // sortCaches={this.sortCaches}
                    // type={this.props.type}
                    rating={this.props.rating}
                    difficulty={this.props.difficulty}
                    displayCaches={this.state.displayCaches}
                    users={this.state.users}
                    currentUser={this.state.currentUser}
                    // currentUser={this.displayFive()}
                    // caches={this.displayFive()}
                    // fourMore={this.fourMore}
                />
            </div> 
        ) 
    }

}
export default UserContainer;