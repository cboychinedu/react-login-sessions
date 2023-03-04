// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 

// Creating the class component 
class Home extends Component {
    // Creating the state 
    state = {} 

    // Rendering 
    render() {
        // Return the jsx 
        return(
            <Fragment> 
                <div className="container"> 
                    <h3> Home Section </h3> < br/> 
                    <button className="ui button"><NavLink to="/login"> Login Here </NavLink></button>
                </div>
               
            </Fragment>
        )
    }
}

// Exporting the Home component 
export default Home; 