import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <Router>
                {/*Navigation Bar*/}
                <Nav/>
                <Switch>
                    {/*Switching between Home and Form Component*/}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/register" component={Form}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
