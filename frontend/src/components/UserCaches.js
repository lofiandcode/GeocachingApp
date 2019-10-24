import React from 'react';

const UserCaches = (props) => {
    return (
        <div className="userCacheDisplay">
                <div>{props.cacheName}</div>
                {/* <div><img src={props.cachePhoto}></img></div> */}
                <div>{props.cacheHint}</div>
        </div>
    )
}
export default UserCaches;