import React, { Fragment, Component } from 'react';
import UserCaches from '../components/UserCaches';
import MoreButton from '../components/MoreButton';
import UserSearchBar from '../components/UserSearchBar'
// import UserForm from '../components/UserForm';

class UserCachesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          caches: [],
          displayCaches: []
        }
        console.log(props);
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
        // console.log(this.props)
        console.log(this.props.currentUser.caches)
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
                {this.props.currentUser.caches ? <div>{ this.props.currentUser.caches.map((cache,index) =>
                    <UserCaches key={index} 
                    cacheName={cache.name}  
                    cachePhoto={cache.photo}
                    cacheHint={cache.hint}
                    />

                    )} </div>
                    : <div> Loading ... </div>}
                <MoreButton fourMore={this.props.fourMore}/>
            </div>
        </Fragment>
    )}
}
export default UserCachesContainer;