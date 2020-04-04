import React, { Component } from 'react';

import './app.css';
class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        }
    }
    componentWillMount(){
        this.getTimeUntil(this.props.deadline)
    }
    componentDidMount(){
        this.getTimeUntil(this.props.deadline)
    }
    getTimeUntil(deadline){
        const time = Date.parse(deadline)-Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60)
        const minutes = Math.floor((time/1000/60)%60)
        const hours = Math.floor((time/1000*60*60)%24)
        const days = Math.floor((time/1000*60*60*24))
        this.state.days = days;
        this.state.hours = hours;
        this.state.minutes = minutes;
        this.state.seconds = seconds;
        this.setState({days:days, hours:hours, minutes:minutes, seconds:seconds})
    }
    render(){
        this.getTimeUntil(this.props.deadline)
        return(
            <div>
                <div class="Clock-days"> {this.state.days} days</div>
                <div class="Clock-hours"> {this.state.hours} hours</div>
                <div class="Clock-minutes"> {this.state.minutes} minutes</div>
                <div class="Clock-seconds"> {this.state.seconds} seconds</div>
            </div>
        )
    }
}

export default Clock;