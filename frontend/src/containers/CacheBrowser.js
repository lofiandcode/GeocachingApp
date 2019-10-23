import React, { Component } from 'react';
import { Link } from "react-router-dom"
import CacheProfCont from './CacheProfCont'


export default class CacheBrowser extends Component {
    createLinks = () => {        
        return this.props.caches.map((cache) => {
            return (
                <li>
                    <Link to={`/caches/${cache.id}`} key={cache.id}>{cache.name}</Link>
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