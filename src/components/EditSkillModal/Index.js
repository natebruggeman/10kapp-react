import React from 'react'
import { Form, Button, Label, Header, Modal} from 'semantic-ui-react';

function EditSkillModal(props) {

    return(
      <Modal open={props.open} closeIcon onClose={props.closeEditModal}>
        <Header>Edit Skill</Header>
        <Modal.Content>
          <Form onSubmit={props.updateSkill}>
            <Label> Goal: </Label>
            <Form.Input
              type="text"
              name="goal"
              value={props.skillToEdit.goal}
              onChange={props.handleEditChange}
            />
            <Label> Objective: </Label>
            <Form.Input
              type="text"
              name="objective"
              value={props.skillToEdit.objective}
              onChange={props.handleEditChange}
            />
            <Label> Time: </Label>
            <Form.Input
              type="number"
              name="time"
              value={props.skillToEdit.time}
              onChange={props.handleEditChange}
            />
            <Modal.Actions>
              <Button color='green' type="submit">Update Skill</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>

    )
}

export default EditSkillModal
