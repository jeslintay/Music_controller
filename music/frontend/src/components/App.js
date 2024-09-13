import React, { Component } from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){

        return (
            // must have a parent element to wrap if not cannot run
        <div> 
            <HomePage/>
            <CreateRoomPage/>
            <RoomJoinPage/>
            
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);