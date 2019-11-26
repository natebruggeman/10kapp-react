 import React from 'react';
 import { Card, Button } from 'semantic-ui-react';
 import '../../App.css';

 function SkillList(props){

   const skills = props.skills.map((skill) => {
     return (
         <Card className="blue card" key={skill.id}>
           <Card.Content>
             <Card.Header>{skill.goal}</Card.Header>
             <Card.Description>{skill.objective}</Card.Description>
             <Card.Description>Cumulative Time: {skill.time} Hours</Card.Description>
           </Card.Content>
           <Card.Content extra>
             <Button className="ui green basic button" onClick={() => props.editSkill(skill.id)}>Edit Skill</Button>
             <Button className="ui red basic button" onClick={() => props.deleteSkill(skill.id)}>Delete Skill</Button>
           </Card.Content>
         </Card>
         )
   })

   return (
       <Card.Group>
         { skills }
       </Card.Group>
     )
 }

 export default SkillList
