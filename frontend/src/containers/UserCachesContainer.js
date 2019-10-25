import React, { Fragment, Component } from 'react';
import UserCaches from '../components/UserCaches';
import MoreButton from '../components/MoreButton';
import UserSearchBar from '../components/UserSearchBar';

class UserCachesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caches: []
        }
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.currentUser.caches)
        return (
            <Fragment>
                {/* <UserForm />  */}
                <br />
                <div className="userCacheContainer">
                    <UserSearchBar
                        filterCaches={this.props.filterCaches}
                        // type={this.props.type}
                        // rating={this.props.rating}
                        // difficulty={this.props.difficulty}
                    />
                    {this.props.displayCaches.length > 0 ? <div>{this.props.displayCaches.map((cache, index) => {
                        return <UserCaches key={index}
                            cacheName={cache.name}
                            cachePhoto={cache.photo}
                            cacheDescription={cache.description}
                            cacheSize={cache.size}
                            cacheHint={cache.hint}
                            />
                    }

                    )} </div>
                        : <div> Loading ... </div>
                    }
                    {/* <MoreButton fourMore={this.props.fourMore} /> */}
                </div>
            </Fragment>
        )
    };
};
export default UserCachesContainer;