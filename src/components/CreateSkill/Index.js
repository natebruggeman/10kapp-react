import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateSkill extends Component {
  constructor(){
    super();

    this.state = {
      goal: '',
      objective: '',
      time: ''
    }
  }
  handleChange = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <h4>Create Skill</h4>
        <Form onSubmit={(e) => this.props.addSkill(e, this.state)}>
          <Label>Goal:</Label>
          <Form.Input type='text' name='goal' value={this.state.goal} onChange={this.handleChange}/>
          <Label>Objective:</Label>
          <Form.Input type='text' name='objective' value={this.state.objective} onChange={this.handleChange}/>
          <Label>Time:</Label>
          <Form.Input type='number' name='time' value={this.state.time} onChange={this.handleChange}/>
          <Button type='Submit'>Create Skill</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateSkill;
