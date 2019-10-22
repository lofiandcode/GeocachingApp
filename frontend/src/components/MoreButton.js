import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=>props.fourMore()}>
            See more caches
          </button>
}

export default MoreButton;