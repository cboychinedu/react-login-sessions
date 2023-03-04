// Importing the necessary modules 
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// Creating the Navbar function component 
const Navbar = () => {
    return(
        <Fragment>
            <nav className="ui raised very padded segment navbar">
                <NavLink to="" className="ui teal inverted segment home"> Home </NavLink>

                <div className="ui right floated header">
                    <button className="ui button"><NavLink to="/"> Home </NavLink></button>
                    <button className="ui button"><NavLink to="#"> About </NavLink></button>
                    <button className="ui button"><NavLink to="#"> Contact </NavLink></button>
                </div>
            </nav>
        </Fragment>
    )
}

// Exporting the Navbar 
export default Navbar; 
