import React, { Component } from 'react';
import { Link } from "react-router-dom"


export default class CacheBrowser extends Component {
    createLinks = () => {        
        
        return this.props.caches.map((cache) => {
            return (
                <li key={cache.id}>
                    {/* Link below shows CacheProfCont */}
                    <Link to={`/caches/${cache.id}`}>{cache.name}</Link>
                </li>
            )
        })
    }


    render() {
        return(
            <>
                <div>
                    <ul>
                        {this.createLinks()}
                    </ul>
                </div>
            </>
        )
    }
}