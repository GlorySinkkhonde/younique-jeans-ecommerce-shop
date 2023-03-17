import React, { Component } from "react";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Pages />
            </div>
        )
    }
}

export default App;