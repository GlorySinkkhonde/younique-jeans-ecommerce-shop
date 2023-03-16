import React, { Component } from "react";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";

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