import React from 'react'
import { Form, Button, Label, Header, Modal} from 'semantic-ui-react';

function CreateSkillModal(props) {

    return(
      <Modal open={props.open} closeIcon onClose={props.close}>
        <Header>Create Skill</Header>
        <Modal.Content>
          <Form onSubmit={(e) => props.addSkill(e, props.goal)}>
            <Label> Goal: </Label>
            <Form.Input
              type="text"
              name="goal"
              value={props.goal}
              onChange={props.handleCreateChange}
            />
            <Label> Objective: </Label>
            <Form.Input
              type="text"
              name="objective"
              value={props.addSkill.objective}
              onChange={props.handleCreateChange}
            />
            <Label> Time: </Label>
            <Form.Input
              type="number"
              name="time"
              value={props.addSkill.time}
              onChange={props.handleCreateChange}
            />
            <Modal.Actions>
              <Button color='green' type="submit">Create Skill</Button>
            </Modal.Actions>
          </Form>
        </Modal.Content>
      </Modal>

    )
}

export default CreateSkillModal
