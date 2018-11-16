import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentWillMount() {
    this.getArticles();
  }

  componentDidMount() {
    this.getArticles();
  }

  // Fetch Articles for now this uses a
  // API but in the future it will get
  // it from the backend
  async getArticles() {
    const API_URL =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=c2e8566083484f9c91818a52ff2c148f";
    const response = await fetch(API_URL);
    const json = await response.json();
    if (json.status === "ok") {
      this.setState({ articles: json.articles });
    }
  }

  render() {
    this.getArticles();
    const { articles } = this.state;
    return (
      <div>
        {articles ? (
          articles.map(article => (
            <div>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <div>loading..</div>
        )}
      </div>
    );
  }
}

export default HomePage;
