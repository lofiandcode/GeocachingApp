import React, { Component } from 'react'


class FindLocation extends Component {

    handleEnteredLocation(e) {
        
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    onChange={event => this.handleEnteredLocation(event)}
                    value={this.props.location}
                />
                <input type="submit"/>
            </form>
        )
    }


}