import React, { Component } from "react";
import { Router, Link, store } from "react-stax";
import "./App.css";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import ArticlePage from "./views/ArticlePage";
import styled from "styled-components";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="admin">Admin</Link>
        <Link to="home">Home</Link>
        <Router defaultPage="login">
          <HomePage page="home" />
          <LoginPage page="login" />
          <AdminPage page="admin" onRoute={route({ to: "login" })} />
          <ArticlePage page="articles" />
        </Router>
      </div>
    );
  }
}

export default App;
