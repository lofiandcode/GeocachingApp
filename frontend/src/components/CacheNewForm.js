import React, { Component } from "react";

export default class CacheNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cachePost: {
                name: "",
                size: "",
                description: "",
                mystery: "",
                hint: "",
                warnings: "",
                coordinates: {
                    lat: "",
                    lng: "",
                },
                photo: "",
            },
            historyPost: {
                created: true,
                favorite: false,
                to_do: false,
                done: true,
                difficulty: "",
                rating: 5,
                comment: "Created the cache!",
                // Change user_id when we have auth!
                user_id: 1
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        let e = event.target
        this.setState({
            cachePost: {
                name: e.name,
                size: e.size,
                description: e.description,
                mystery: e.mystery,
                hint: e.hint,
                warnings: e.warnings,
                coordinates: {
                    lat: e.lat,
                    lng: e.lng,
                },
                photo: e.photo,
            },
            historyPost: {
                created: true,
                favorite: false,
                to_do: false,
                done: true,
                difficulty: e.difficulty,
                rating: 5,
                comment: "Created the cache!",
                // Change user_id when we have auth!
                user_id: 1
            }
        });
    }

    handleSubmit(event) {
        alert('This form was submitted!');
        event.preventDefault();
    }

    render() {
        return (    
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" value={this.state.cachePost.name} onChange={this.handleChange}
                    />
                </label>
                <label>
                    Size CHANGEME!!!
                    <input
                        type="radio"
                        value={this.state.cachePost.size}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Difficulty
                    <input
                        type="radio"
                        value={this.state.historyPost.difficulty}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        value={this.state.cachePost.description}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Mystery
                    <input
                        type="text"
                        value={this.state.cachePost.mystery}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Hint
                    <input
                        type="text"
                        value={this.state.cachePost.hint}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Warnings
                    <input
                        type="text"
                        value={this.state.cachePost.warnings}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Latitude
                    <input
                        type="text"
                        value={this.state.cachePost.coordinates.lat}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Longitude
                    <input
                        type="text"
                        value={this.state.cachePost.coordinates.lng}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Photo URL
                    <input
                        type="text"
                        value={this.state.cachePost.photo}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

