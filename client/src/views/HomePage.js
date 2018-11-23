import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-stax";

const TopDevNav = styled.div`
  background-color: #1e272e;
  display: flex;
  justify-content: space-evenly;
  a {
    transition: 0.2s all ease;
    padding: 1vh 4vh;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: #2f3542;
    }
  }
`;

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
        <TopDevNav>
          <Link to="/admin">Admin</Link>
          <Link to="home">Home</Link>
        </TopDevNav>
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
