// Importing the necessary modules 
import React, { Component, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Input, Container, Label, Form, Button } from "semantic-ui-react";
import { AuthContext } from '../AuthContext/AuthContext';
import withRouter from './WithRouter';
 

// Creating the Login class component 
class Login extends Component {
    // 
    state = {
        token: null, 

    }

    componentDidMount() {
        // Get token 
        const tokenString = localStorage.getItem('x-auth-token'); 
        const userToken = JSON.parse(tokenString); 

      }

    // 
    static contextType = AuthContext; 

    loginUser = async (credentials) => {
        await fetch('http://localhost:3002/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(data => {
           return data.json(); 
        })
        .then(tokenData => {

            // Saving to local storage 
            localStorage.setItem('x-auth-token', JSON.stringify(tokenData.token)); 

            this.props.Tokenstate.setState({
                token: tokenData.token, 
                isLoggedIn: tokenData.isLoggedIn, 
            });

            // Navigate 
            setTimeout(() => {
                // Redirect the user 
                this.props.router.navigate('/dashboard'); 
            }, 3000)

        })

    }

    // Saving the username and password 
    handleSubmit = async (event) => {
        // Pevent default submission 
        event.preventDefault();

        // Getting the username, and password 
        let usernameValue = event.target[0].value; 
        let passwordValue = event.target[1].value; 

        // 
        await this.loginUser({usernameValue, passwordValue})

    }

    // Rendering the Login component 
    render() {
        // Return the jsx 
        return (
            <Fragment> 
                {/* Adding the login form  */}
                <Container className="form-container"> 
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field> 
                            <Label className="username-label"> Username </Label> <br /> 
                            <Input type="text" placeholder='Username...' /> 
                        </Form.Field>

                        <Form.Field> 
                            <Label className="password-label"> Password </Label>  <br /> 
                            <Input type="password" placeholder='Password...' /> 
                        </Form.Field>
                        
                        <Form.Field> 
                            <Button className="submit-button"> Submit </Button>
                        </Form.Field>
                    </Form>
                </Container>

            </Fragment>
        )
    }
}


// Exporting the Login Component 
export default withRouter(Login); 