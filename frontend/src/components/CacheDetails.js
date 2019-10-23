import React, { Component } from 'react';

export default class CacheDetails extends Component {
    render() {
        return(
            <div className="cache details">
                <div className="detail section">
                    <h2>Description</h2>
                    <p>{this.props.description}</p>
                </div>

                <div className="detail section">
                    <h2>Mystery</h2>
                    <p>{this.props.mystery}</p>
                </div>

                <div className="detail section">
                    <h2>Hint MAKE IT HIDE!</h2>
                    <p>{this.props.hint}</p>
                </div>

                <div className="detail section">
                    <h2>Warnings</h2>
                    <p>{this.props.warnings}</p>
                </div>
            </div>
        )
    }
}