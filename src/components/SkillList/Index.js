 import React from 'react';
 import { Card, Button } from 'semantic-ui-react';

 function SkillList(props){

   const skills = props.skills.map((skill) => {
     return (
         <Card key={skill.id}>
           <Card.Content>
             <Card.Header>{skill.goal}</Card.Header>
             <Card.Description>{skill.objective}</Card.Description>
             <Card.Description>Cumulative Time: {skill.time} Hours</Card.Description>
           </Card.Content>
           <Card.Content extra>
             <Button onClick={() => props.deleteSkill(skill.id)}>Delete Skill</Button>
             <Button onClick={() => props.editSkill(skill.id)}>Edit Skill</Button>
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
