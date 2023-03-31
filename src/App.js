import React, { Component } from "react";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Pages />
                <Footer />
            </div>
        )
    }
}

export default App;