import React, { Fragment } from 'react';
import UserCaches from '../components/UserCaches';
import MoreButton from '../components/MoreButton'


const UserCachesContainer = (props) => {
    return(
        <Fragment>
            <div className="userCacheContainer">
                {props.caches.map(cache => {
                    return <UserCaches 
                                key={cache.id}
                                cache={cache} />
                })}
                <MoreButton fourMore={props.fourMore}/>
            </div>
        </Fragment>
    )
}
export default UserCachesContainer;