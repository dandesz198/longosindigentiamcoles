import React, { Component } from "react";
import { Router } from "react-stax";
import "./App.css";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import ArticlePage from "./views/ArticlePage";
import Resp_Modal from "./components/Admin/Modal";
// import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Resp_Modal />
        <Router defaultPage="home">
          <HomePage page="home" />
          <LoginPage page="login" />
          <AdminPage page="admin" />
          <ArticlePage page="articles" />
        </Router>
      </div>
    );
  }
}

export default App;
