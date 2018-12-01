import React, { Component } from "react";
import { Router } from "react-stax";
import "./App.css";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import ArticlePage from "./views/ArticlePage";
import Resp_Modal from "./components/Admin/Modal";
import { getAll } from "./api/article";
import articleStore from "./stores/articleStore";
import userStore from "./stores/userStore";

class App extends Component {
  async componentDidMount() {
    articleStore.articles = await getAll();
    userStore.init();
  }

  render() {
    return (
      <div className="App">
        <Resp_Modal />
        <Router defaultPage="home">
          <HomePage page="home" />
          <LoginPage page="login" />
          <AdminPage page="admin" />
          <ArticlePage page="article/?id=" />
        </Router>
      </div>
    );
  }
}

export default App;
