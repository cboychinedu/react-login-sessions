// Importing the necessary modules 
import './App.css';
import { Component, Fragment } from 'react';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import 'semantic-ui-css/semantic.min.css'; 
import Dashboard from './Components/Dashboard';
import Preferences from './Components/Preferences';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext/AuthContext';


// Creating the class component 
class App extends Component {
  // Creating the state 
  state = {
    token: null, 
    isLoggedIn: false,
  }

  // When the root component mounts, execute the block of code 
  // below 
  componentDidMount() {
    // Extract the token data, and the login status. 
    const tokenString = localStorage.getItem('x-auth-token') || null; 
    const loginStatus = localStorage.getItem('isLoggedIn') || null; 

    // Convert the string data into a JSON object
    const userToken = JSON.parse(tokenString); 
    const userLoginStatus = JSON.parse(loginStatus); 

    // If the user token is present, save the token 
    // into the state 
    if (userToken && userLoginStatus) {
      // Setting the state to hold the token value 
      this.setState({
        token: userToken, 
        isLoggedIn: true, 
      })
    }
  }

  // Render the component 
  render() {
    // Return the jsx 
    return(
      <AuthContextProvider> 
      <Fragment>
        <BrowserRouter> 
          {/* Adding the General Navbar  */}
          <Navbar /> 

          {/* Setting the Routes configurations */}
          <Routes>
              <Route exact path="/" element={ this.state.token ? <Home /> : <Login Tokenstate={this}/> } /> 
              <Route path="/login" element={ this.state.token ? <Home /> : <Login Tokenstate={this}/> } /> 
              <Route path="/dashboard" element={ this.state.token ? <Dashboard/> : <Login Tokenstate={this}/> } /> 
              <Route path="/preferences" element={ this.state.token ? <Preferences /> : <Login Tokenstate={this}/> } /> 
              <Route path="*" element={ this.state.token ? <Home Tokenstate={this}/> : <Login Tokenstate={this}/> } /> 
          </Routes>
        </BrowserRouter>
      </Fragment>
      </AuthContextProvider>
    )
  }
}

// Exporting the component 
export default App;
