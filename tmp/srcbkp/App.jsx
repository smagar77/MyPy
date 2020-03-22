import React, { Component } from 'react';
import './app.css'
import Clock from './Clock'
class App extends Component{

    constructor(props){
        super(props);
        this.state={
            deadline:'December 25,2017',
            newDeadLine:''
        }
    }

    changeDeadline(){
        this.setState( {deadline: this.state.newDeadLine} )
    }

    render(){
        return(
            <div class="App">
                <div class="App-title">Countdown to, {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <div>
                    <input type='text' placeholder='New Date' onChange={event=>this.setState({newDeadLine:event.target.value})} />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;