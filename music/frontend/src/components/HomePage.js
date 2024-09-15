import React, { Component } from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    {/* Ensure the root route has a valid element */}
                    <Route path="/" element={<Home />} />
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                </Routes>
            </Router>
        );
    }
}

// Functional component to render the Home page content
function Home() {
    return <p>This is the Home page.</p>;
}
