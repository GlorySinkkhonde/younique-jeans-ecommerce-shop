import React, { Component } from "react";
import { Route, Routes } from "react-router-dom"
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Cart from "./pages/cart";

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