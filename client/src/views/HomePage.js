import React, { Component } from "react";
import ArticleCard from "../components/articleCard";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const rotator = keyframes`
  0% {
    transform: rotate(-180deg);
    box-shadow: inset -5px 0 0 5px currentColor;
  }
  50% {
    transform: rotate(0deg);
    box-shadow: inset -1px 0 0 1px currentColor;
  }
  100% {
    transform: rotate(180deg);
    box-shadow: inset -5px 0 0 5px currentColor;
  }
`;

const Spinner = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 64px;
  height: 64px;
  border-radius: 64px;
  &:before {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 64px;
    content: " ";
    clip: rect(0, 64px, 32px, 0);
    box-shadow: inset -5px 0 0 5px currentColor;
    color: #323b40;
    animation: ${rotator} 1s infinite linear;
  }
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      err: ""
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentWillMount() {
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
    if (json.status !== "ok") {
      this.setState({ err: json.message });
    }
    this.setState({ articles: json.articles });
  }

  render() {
    const { articles, err } = this.state;
    return (
      <Container>
        {err ? (
          <h1>{err}</h1>
        ) : articles ? (
          articles.map(article => {
            const { title, description } = article;
            return <ArticleCard title={title} description={description} />;
          })
        ) : (
          <Spinner />
        )}
      </Container>
    );
  }
}

export default HomePage;
