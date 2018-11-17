import React, { Component } from "react";
import { Router, Link } from "react-stax";
import "./App.css";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import { store } from "react-stax";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="admin">Admin</Link>
        <Link to="home">Home</Link>
        <Router defaultPage="login">
          <HomePage page="home" />
          <LoginPage page="login" />
          <AdminPage page="admin" />
        </Router>
      </div>
    );
  }
}

export default App;
