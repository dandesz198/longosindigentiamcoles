import React, { Component } from "react";
import { Router, Link, route } from "react-stax";
import "./App.css";
import styled from "styled-components";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Router defaultPage="home">
            <HomePage page="home" />
            <LoginPage page="login" />
            <AdminPage page="admin" onRoute={route({ to: "login" })} />
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
