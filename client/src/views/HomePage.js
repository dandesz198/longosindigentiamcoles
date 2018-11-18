import React, { Component } from "react";
import ArticleCard from "../components/articleCard";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  //Get articles before components mount
  componentWillMount() {
    this.getArticles();
  }

  // Fetch Articles for now this uses a
  // API but in the future it will get
  // it from the backend
  async getArticles() {
    const API_URL = "https://fake-articles.herokuapp.com/api/articles/";
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json);
    this.setState({ articles: json });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {// Show spinner when there are no articles in state
        articles.length !== 0 ? (
          articles.map(article => {
            return (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
              />
            );
          })
        ) : (
          <Container>
            <Spinner />
          </Container>
        )}
      </div>
    );
  }
}

export default HomePage;
