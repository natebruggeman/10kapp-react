import React from 'react';
import { Form, Button, Label,} from 'semantic-ui-react';
const ms = require('pretty-ms')



class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      seconds: this.state.seconds,
      start: Date.now() - this.state.seconds,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      seconds: Date.now() - this.state.start
    }), 1)
  }
  stopTimer() {
    clearInterval(this.timer)
    console.log("stop")
  }
  resetTimer() {
    this.setState({seconds: 0})
    console.log("reset")
  }
  render() {
     return (
       <div>
        <Form>
           <Label className="ui big label">Timer: {ms(this.state.seconds)}</Label>
           <br/><br/>
         <Button className="ui green button"  onClick={this.startTimer}>Start</Button>
         <Button className="ui red button"  onClick={this.stopTimer}>Stop</Button>
         <Button className="ui blue button"  onClick={this.resetTimer}>Reset</Button>
         </Form>
       </div>
     );
  }
}
export default Timer