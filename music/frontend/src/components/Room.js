// main page of our app

import React from 'react'

export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            votestoSkip: 2,
            guestCanPause: false,
            isHost: false, //if user is host
        }
    }
    render(){
        return <div>
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest can Pause: {this.state.guestCanPause}</p>
            <p>Host: {this.state.isHost}</p>
        </div>
    }
}