import React, { Component } from "react";
import { Form, Input } from 'semantic-ui-react';

export default class CacheNewForm extends Component {
    state = {
        name: "",
        size: "",
        description: "",
        mystery: "",
        hint: "",
        warnings: "",
        lat: "",
        lng: "",
        photo: "",
        created: true,
        favorite: false,
        to_do: false,
        done: true,
        difficulty: "",
        rating: 5,
        comment: "Created the cache!",
        // Change user_id when we have auth!
        user_id: 1
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        fetch("http://localhost:3000/caches", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "name": this.state.name,
                "size": this.state.size,
                "description": this.state.description,
                "mystery": this.state.mystery,
                "hint": this.state.hint,
                "warnings": this.state.warnings,
                "coordinates": {
                    "lat": this.state.lat,
                    "lng": this.state.lng
                },
                "photo": this.state.photo
            })
        })
            .then(res => res.json())
            .then(data => {
                fetch("http://localhost:3000/histories", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        "created": true,
                        "favorite": false,
                        "to_do": false,
                        "done": true,
                        "difficulty": this.state.difficulty,
                        "rating": 5,
                        "comment:": "Created the cache!",
                        "user_id": 1,
                        "cache_id": data.id
                    })
                })
                    .then(res => res.json())
                    .then(data => this.goToCache(data))
            })
    }

    goToCache = (data) => {
        // this.props.push(`/caches/${data.cache.id}`)
        // console.log(this.props)
        // console.log(this.props.history)
        // var Router = require('react-router');
        // Router.browserHistory.push(`/caches/${data.cache.id}`);
    }
    
    render() {
        const { submittedName, name, submittedSize, size, submittedDescription, description, submittedMystery, mystery, submittedHint, hint, submittedWarnings, warnings, submittedLat, lat, submittedLng, lng, submittedPhoto, photo, submittedDifficulty, difficulty } = this.state


        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Field
                    label='Name'
                    name="name"
                    value={name}
                    control='input'
                    onChange={this.handleChange}
                    
                    />
                <Form.Field label='Size' control='select' onChange={this.handleChange} name="size">
                    <option value='easy'>Select Size</option>
                    <option value='extra small'>Extra Small</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extra large'>Extra Large</option>
                </Form.Field>
                <Form.Field label='Difficulty' control='select' onChange={this.handleChange} name="difficulty">
                    <option value='easy'>Select Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='hard'>Hard</option>
                </Form.Field>
                </Form.Group>
                
                <Form.Field label='Description' control='textarea' rows='3' onChange={this.handleChange}  name="description"/>
                <Form.Field label='Mystery' control='textarea' rows='3' onChange={this.handleChange}  name="mystery"/>
                <Form.Field label='Hint' control='textarea' rows='3' onChange={this.handleChange}  name="hint"/>
                <Form.Field label='Warnings' control='textarea' rows='3' onChange={this.handleChange}  name="warnings"/>
                
                <Form.Group inline>
                <Form.Field>
                    <label>Coordinates</label>
                    <Input placeholder='Latitude: 51.1789013' onChange={this.handleChange}  name="lat"/>
                </Form.Field>
                <Form.Field>
                    <Input placeholder='Longitude: -1.825987' onChange={this.handleChange}  name="lng"/>
                </Form.Field>
                </Form.Group>
                <Form.Field label='Photo URL' control='input' onChange={this.handleChange}  name="photo"/>
                <Form.Field control='button' >
                Submit
                </Form.Field>
            </Form>
        )
    }
}