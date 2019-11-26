import React, { Component } from 'react';
import { Icon,  Form, Button, Label, Header, Modal } from 'semantic-ui-react';

class CreateSkill extends Component {
  constructor(props){
    super(props);

    this.state = {
      goal: '',
      objective: '',
      time: ''
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (

      <React.Fragment>
        <Icon
        name='plus'
        onClick={this.props.openModal}
        />
        <Modal open={this.props.open} closeIcon onClose={this.props.closeModal}>
          <Header>Create Skill</Header>
          <Modal.Content>
            <Form onSubmit={(e) => this.props.addSkill(e, this.state)}>
              <Label> Goal: </Label>
              <Form.Input
                type="text"
                name="goal"
                value={this.state.goal}
                onChange={this.handleChange}
              />
              <Label> Objective: </Label>
              <Form.Input
                type="text"
                name="objective"
                value={this.state.objective}
                onChange={this.handleChange}
              />
              <Label> Time: </Label>
              <Form.Input
                type="number"
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
              />
              <Modal.Actions>
                <Button color='green' type="submit">Create Skill</Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
      )
  }
}

export default CreateSkill;
