import React, { Component } from "react";
import { params } from "react-stax";

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: ""
    };
    this.getArticle = this.getArticle.bind(this);
  }
  async getArticle() {
    const id = params.id;
    const API_URL = "https://fake-articles.herokuapp.com/api/articles/";
    const response = await fetch(API_URL);
    const json = await response.json();
    json.forEach(article => {
      if (article.id === id) {
        this.setState({ title: article.title, text: article.text });
      }
    });
    this.setState({ articles: json });
  }

  componentWillMount() {
    this.getArticle();
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default ArticlePage;
