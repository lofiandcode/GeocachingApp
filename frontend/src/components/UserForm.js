import React from 'react';
import { Form } from 'semantic-ui-react'
// import styles from './Form.sass'

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            img_url: '',
            bio: ''
          }
    };

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            'Content-Type': 'Application/json',
            Accept: "application/json"
          },
          body: JSON.stringify(
            {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                img_url: this.state.img_url,
                bio: this.state.bio
            }
          )
        })
        .then(response => response.json()).then(json => this.props.fetchUsers())
      };
    
      firstnameChange = (event) => {
        this.setState({
          firstname: event.target.value
        })
      };
      lastnameChange = (event) => {
        this.setState({
          lastname: event.target.value
        })
      };
      usernameChange = (event) => {
        this.setState({
          username: event.target.value
        })
      };
      img_urlChange = (event) => {
        this.setState({
          img_url: event.target.value
        })
      };
      bioChange = (event) => {
        this.setState({
          bio: event.target.value
        })
      };
    
      render() {
        return (
          <div >
            <h3>Create User Profile</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input fluid label="firstname" placeholder="firstname" name="firstname" onChange={event => this.firstnameChange(event)}/>
                <Form.Input fluid label="lastname" placeholder="lastname" name="lastname" onChange={event => this.lastnameChange(event)}/>
                <Form.Input fluid label="username" placeholder="username" name="username" onChange={event => this.usernameChange(event)}/>
                <Form.Input fluid label="img_url" placeholder="img_url" name="img_url" onChange={event => this.img_urlChange(event)}/>
                <Form.Input fluid label="bio" placeholder="bio" name="bio" onChange={event => this.bioChange(event)}/>
              </Form.Group>
              <Form.Button>Submit</Form.Button>
            </Form>
          </div>
        )
      }
    }
    
    export default UserForm;