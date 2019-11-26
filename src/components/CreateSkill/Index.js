import React, { Component } from 'react';
import CreateSkillModal from '../CreateSkillModal/Index.js';
import { Icon } from 'semantic-ui-react';

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

      <React.Fragment>
        <Icon
        name='plus'
        onClick={this.props.openModal}
        />

        <CreateSkillModal
          addSkill={this.props.addSkill}
          open={this.props.open}
          close={this.props.closeModal}
          handleCreateChange={this.handleCreateChange}
        />
      </React.Fragment>
      )
  }
}

export default CreateSkill;
