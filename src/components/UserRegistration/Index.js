import React from 'react';
import { Form, Button, Label } from 'semantic-ui-react';

class Registraion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      action: 'login'
    }
  }

  loginRegister = () => {
    if(this.state.action === "login") {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      })
    } else {
      this.props.register({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    }
  }

  switchForm = () => {
    if(this.state.action === "login") {
      this.setState({
        action: 'register'
      })
    } else {
      this.setState({
        action: 'login'
      })
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.loginRegister()
  }

  render() {
    return(
      <div className="Registration">
        <Form onSubmit={this.handleSubmit}>
          {
            this.state.action === "register"
            ?
            <React.Fragment>
              <Label>Username:</Label>
              <Form.Input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </React.Fragment>
            :
            null
          }

          <Label>Email:</Label>
          <Form.Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="Submit">{
            this.state.action === "register" ? "Register" : "Log in" }</Button>
        </Form>
        {
          this.state.action === "register"
          ?
          <small><span onClick={this.switchForm}> Account already exists, please log in here</span>.</small>
          :
          <small><span onClick={this.switchForm}>No account? Please sign up here</span>!</small>
        }
      </div>
    )
  }
}

export default Registraion
