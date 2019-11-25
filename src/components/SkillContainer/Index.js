import React, { Component } from 'react';
import SkillList from '../SkillList/Index.js';
import CreateSkill from '../CreateSkill/Index.js';
import EditSkillModal from '../EditSkillModal/Index.js';
import { Grid } from 'semantic-ui-react';

class SkillContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      skills: [],
      editModalOpen: false,
      skillToEdit: {
        goal: '',
        objective: '',
        time: '',
        owner: '',
        id: ''
      }
    }
  }
  componentDidMount(){
    this.getSkills();
  }
  getSkills = async () => {

    try {
      const skills = await fetch(process.env.REACT_APP_API_URL + '/api/v1/skills/ ', {
        credentials: 'include'
      });
      const parsedSkills = await skills.json();
      console.log(parsedSkills);

      this.setState({
        skills: parsedSkills.data
      })

    } catch(err){
      console.log(err);
    }
  }
  addSkill = async (e, skillFromTheForm) => {
    e.preventDefault();
    console.log(skillFromTheForm)

     try {

      const createdSkillResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/skills/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(skillFromTheForm),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await createdSkillResponse.json();
      console.log(parsedResponse, ' this is response')

      this.setState({skills: [...this.state.skills, parsedResponse.data]})


    } catch(err){
      console.log('error')
      console.log(err)
    }
  }

  editSkill = (idOfSkillToEdit) => {
  const skillToEdit = this.state.skills.find(skill =>   skill.id === idOfSkillToEdit)
    this.setState({
      editModalOpen: true,
      skillToEdit: {
        ...skillToEdit
      }
    })
  }

  handleEditChange = (event) => {
    this.setState({
      skillToEdit: {
        ...this.state.skillToEdit,
        [event.target.name]: event.target.value
      }
    })
  }
  updateSkill = async (e) => {
    e.preventDefault()

    try {

      const url = process.env.REACT_APP_API_URL + '/api/v1/skills/' + this.state.skillToEdit.id;

      const updateResponse = await fetch(url, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.skillToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const updateResponseParsed = await updateResponse.json()

      console.log("response from DB after trying to do update");
      console.log(updateResponseParsed);

      const newSkillArrayWithUpdate = this.state.skills.map((skill) => {
        if(skill.id === updateResponseParsed.data.id) {

          skill = updateResponseParsed.data
        }
        return skill
      })

      this.setState({
        skills: newSkillArrayWithUpdate
      })

      this.closeModal()

    } catch(err) {
      console.error(err)
    }
  }

  closeModal = () => {
    this.setState({
      editModalOpen: false
    })
  }

  deleteSkill = async (id) => {
    console.log(id)

    const deleteSkillResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/skills/' + id, {
        method: 'DELETE',
        credentials: 'include'
    });

    const deleteSkillParsed = await deleteSkillResponse.json();
    console.log(deleteSkillParsed)

    this.setState({skills: this.state.skills.filter((skill) => skill.id !== id )})
  }
  render(){
    return (
      <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row>
          <Grid.Column>
            <SkillList skills={this.state.skills} deleteSkill={this.deleteSkill} editSkill={this.editSkill}/>
          </Grid.Column>
          <Grid.Column>
           <CreateSkill addSkill={this.addSkill}/>
          </Grid.Column>
          <EditSkillModal
            open={this.state.editModalOpen}
            updateSkill={this.updateSkill}
            skillToEdit={this.state.skillToEdit}
            closeModal={this.closeModal}
            handleEditChange={this.handleEditChange}
          />
        </Grid.Row>
      </Grid>
      )
  }
}

export default SkillContainer
