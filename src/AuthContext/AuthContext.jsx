// Importing the necessary modules 
import React, { Component, createContext, Fragment } from 'react'; 

// 
const AuthContext = createContext(); 

// 
class AuthContextProvider extends Component {
    // State 
    state = {
        isLoggedin: false, 
        jwtToken: null, 
    }

    // Change Auth status 
    changeAuthStatus = (jwtToken) => {
        this.setState({
            isLoggedin: true, 
            jwtToken: jwtToken, 
        })
    }

    // Render 
    render() {
        // Return 
        return(
            <Fragment> 
                <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}} >
                    { this.props.children }
                </AuthContext.Provider>
            </Fragment>
        )
    }
}

// Exporting the AuthContext Provider 
export { AuthContext, AuthContextProvider }; 