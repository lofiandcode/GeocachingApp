import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "../App.css";

export default class CacheBrowser extends Component {
    createLinks = () => {        
        return this.props.caches.map((cache) => {
            return (
                <ListGroup variant="flush">
                <div key={cache.id}>
                    {/* Link below shows CacheProfCont */}
                    <ListGroup.Item><Link to={`/caches/${cache.id}`}>{cache.name}</Link></ListGroup.Item>
                </div>
                </ListGroup>
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