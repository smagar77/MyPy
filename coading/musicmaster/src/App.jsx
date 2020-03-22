import React, { Component } from 'react'
import './App.css'
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';



class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            query:''
        }
    }
    search(){
        console.log(this.state.query)
        const BASE_URL  = 'https://api.spotify.com/v1/search?'
        const FETCH_URL = BASE_URL + 'q=' + this.state.query
            +'&type=artist&limit=1'
        console.log(FETCH_URL)
    }
    render(){
        return(
            <div class="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text"
                        placeholder="Search for an artist.."
                         value={this.state.query}
                         onChange={event => {this.setState({query:event.target.value})}}
                         onKeyPress={ event =>{
                             if(event.key == 'Enter'){
                                this.search()
                             }
                         }
                         }
                         />
                     <Button onClick={() => this.search()}> Search </Button>
                    </InputGroup>
                </FormGroup>
                <div className="profile">
                    <div>Artists Picture</div>
                    <div>Artists Name</div>
                </div>
                <div className="Gallery">Gallery</div>

            </div>
        )
    }
}

export default App;