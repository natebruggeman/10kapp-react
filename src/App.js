import React from 'react';
import './App.css';
import Icon from './components/Icon/Index.js'
import NavMenu from './components/NavMenu/Index.js'
import SkillContainer from './components/SkillContainer/Index.js';
import Registration from './components/UserRegistration/Index.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      loggedInUserEmail: null
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
        loggedInUserEmail: parsedLoginResponse.data.email
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
        loggedInUserEmail: parsedRegisterResponse.data.email
      })
    } else {
      console.log("Register Busted:");
      console.log(parsedRegisterResponse);
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <React.Fragment>
            <Icon />
            <NavMenu />
            <SkillContainer />
          </React.Fragment>
          :
          <Registration login={this.login} register={this.register} />
        }
      </div>
    );
  }
}

export default App;
// think of using router already
