import React from 'react';
import './App.css';
import SkillContainer from './components/SkillContainer/Index.js';
import Registration from './components/UserRegistration/Index.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      loggedInUserEmail: null,
      loggedInUserName: null
    }
  }

  login = async (loginInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/login', {
      method: 'POST',
      credentials: 'include', // cookies effectively
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedLoginResponse = await response.json()

    if(parsedLoginResponse.status.code === 200) {
      this.setState({
        loggedIn: true,
        loggedInUserEmail: parsedLoginResponse.data.email,
        loggedInUserName: parsedLoginResponse.data.username
      })
    } else {
      console.log("Login Busted:");
      console.log(parsedLoginResponse);
    }
  }

  register = async (registerInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(registerInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedRegisterResponse = await response.json()

    if(parsedRegisterResponse.status.code === 201) {
      this.setState({
        loggedIn: true,
        loggedInUserEmail: parsedRegisterResponse.data.email,
        loggedInUserName: parsedRegisterResponse.data.username
      })
    } else {
      console.log("Register Busted:");
      console.log(parsedRegisterResponse);
    }
  }
  logout = async (logout) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/logout', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(logout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedLogoutResponse = await response.json()

    if(parsedLogoutResponse.status.code === 200) {
      this.setState({
        loggedIn: false
      })
    } else {
      console.log("Logout Busted:");
      console.log(parsedLogoutResponse);
    }
  }
  render() {
    return (
        <div className="App">
        {
          this.state.loggedIn
          ?
          <React.Fragment>
          <SkillContainer
          logout={this.logout}
          username={this.state.loggedInUserName}
          />
          </React.Fragment>
          :
          <Registration login={this.login} register={this.register} />
        }
        </div>
    )
  }
}

export default App;
// think of using router already
