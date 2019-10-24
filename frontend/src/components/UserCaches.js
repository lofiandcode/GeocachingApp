import React from 'react';

const UserCaches = (props) => {
    return (
        <div className="userCacheDisplay">

                Cache name: {props.cacheName}
                <img src={props.cachePhoto}></img>
                <div>Hint: {props.cacheHint}</div><br></br>
            {/* <div className="field" /> */}
        </div>
    )
}
export default UserCaches;