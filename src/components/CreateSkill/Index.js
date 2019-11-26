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
        <Modal open={this.props.open} closeIcon onClose={this.props.close}>
          <Header>Create Skill</Header>
          <Modal.Content>
            <Form onSubmit={(e) => this.state.addSkill(e, this.state.goal)}>
              <Label> Goal: </Label>
              <Form.Input
                type="text"
                name="goal"
                value={this.state.goal}
                onChange={this.state.handleCreateChange}
              />
              <Label> Objective: </Label>
              <Form.Input
                type="text"
                name="objective"
                value={this.state.objective}
                onChange={this.props.handleCreateChange}
              />
              <Label> Time: </Label>
              <Form.Input
                type="number"
                name="time"
                value={this.props.time}
                onChange={this.props.handleCreateChange}
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
