// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { Input, Container, Label, Form, Button } from "semantic-ui-react";
import withRouter from './WithRouter';
 

// Creating the Login class component 
class Login extends Component {
    // Setting the state 
    state = {}

    // Creating a function for connecting to the mongodb backend to 
    // validate the user
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
            localStorage.setItem('isLoggedIn', JSON.stringify(tokenData.isLoggedIn)); 
            
            // Setting the App root component state 
            this.props.Tokenstate.setState({
                token: tokenData.token, 
                isLoggedIn: tokenData.isLoggedIn, 
            });

            // Wait for 3secs, and navigate the user to the dashboard page 
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

        // Validate the logged in user
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