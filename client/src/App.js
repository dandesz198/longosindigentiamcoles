import React, { Component } from "react";
import { Router} from "react-stax";
import "./App.css";
import HomePage from "./views/HomePage";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import articleStore from './stores/articleStore'
import ArticlePage from "./views/ArticlePage";
import Resp_Modal from './components/Admin/Modal'
// import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.getArticles = this.getArticles.bind(this);
  }

  async getArticles() {
    const API_URL = "https://fake-articles.herokuapp.com/api/articles/";
    const response = await fetch(API_URL);
    const json = await response.json();
    articleStore.articles = json
  }

  render() {
    return (
      <div className="App">
        <Resp_Modal />
        <Router defaultPage="home">
          <HomePage page="home"  onRoute={this.getArticles}/>
          <LoginPage page="login" />
          <AdminPage page="admin" />
          <ArticlePage page="articles" onRoute={this.getArticles}/>
        </Router>
      </div>
    );
  }
}

export default App;
