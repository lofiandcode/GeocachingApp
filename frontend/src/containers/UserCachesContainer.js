import React, { Fragment, Component } from 'react';
import UserCaches from '../components/UserCaches';
import MoreButton from '../components/MoreButton';
import UserSearchBar from '../components/UserSearchBar'
// import UserForm from '../components/UserForm';

class UserCachesContainer extends Component {
    constructor(){
        super()
        this.state = {
          caches: [],
          displayCaches: []
        }
      }

    filterCaches = (type) => {
        if(type !== "All"){
          this.setState({
            displayCaches: this.state.caches.filter(cache => cache.type === type)        
          })
        }else{
          this.setState({
            displayCaches: this.state.caches
          })
        }
      };
    
    render() {
        return(
        <Fragment>
            {/* <UserForm />  */}
                {/* fetchUsers={this.fetchUsers} /> */}
            <br/>
            <div className="userCacheContainer">
                <UserSearchBar 
                    filterCaches={this.filterCaches}
                    type={this.props.type}
                    rating={this.props.rating}
                    difficulty={this.props.difficulty}
                />
                {this.props.caches.map(cache => {
                    return <UserCaches 
                                key={cache.id}
                                cache={cache} />
                })}
                <MoreButton fourMore={this.props.fourMore}/>
            </div>
        </Fragment>
    )}
}
export default UserCachesContainer;