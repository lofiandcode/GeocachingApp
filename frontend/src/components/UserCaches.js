import React from 'react';

const UserCaches = (props) => {
    return (
        <div className="userCacheDisplay">

                Cache name: {props.cacheName}
                <div src={props.cachePhoto}></div>
                <div>Hint: {props.cacheHint}</div><br></br>
            {/* <div className="field" /> */}
        </div>
    )
}
export default UserCaches;