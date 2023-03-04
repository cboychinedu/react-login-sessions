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
    isLoggedIn: false
  }

  componentDidMount() {
    // Get token 
    const tokenString = localStorage.getItem('x-auth-token') || null; 
    const userToken = JSON.parse(tokenString); 

    // 
    if (userToken) {
      this.setState({
        token: userToken, 
        isLoggedIn: true, 
      })
    }
  }

  // Render 
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
              <Route path="*" element={ this.state.token ? <Login Tokenstate={this}/> : <Login Tokenstate={this}/> } /> 
          </Routes>
        </BrowserRouter>
      </Fragment>
      </AuthContextProvider>
    )
  }
}

// Exporting the component 
export default App;
