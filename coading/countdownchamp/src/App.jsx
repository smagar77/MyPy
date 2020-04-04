import React, { Component } from 'react';
import './app.css'
import Clock from './Clock'
import { Form, FormControl, Button } from 'react-bootstrap'
class App extends Component{

    constructor(props){
        super(props);
        this.state={
            deadline:'December 25,2020',
            newDeadLine:''
        }
    }

    changeDeadline(){
        this.setState( {deadline: this.state.newDeadLine} )
    }

    render(){
        return(
            <Form inline>
            <div class="App">
                <div class="App-title">Countdown to, {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <div>
                    <FormControl type='text' placeholder='New Date' onChange={event=>this.setState({newDeadLine:event.target.value})} />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </div>
            </div>
            </Form>
        )
    }
}

export default App;