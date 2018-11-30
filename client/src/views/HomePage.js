import React, { Component } from "react";
import ArticleCard from "../components/articleCard";
import styled, { keyframes } from "styled-components";
import { view, Link } from "react-stax";
import articleStore from "../stores/articleStore";
import { getAll } from "../api/article";

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
  async componentDidMount() {
    const articles = await getAll();
    console.log({ articles })
    articleStore.articles = await getAll();
  }

  render() {
    const { articles } = articleStore;
    return (
      <div>
        <TopDevNav>
          <Link to="/admin">Admin</Link>
          <Link to="home">Home</Link>
        </TopDevNav>
        {// Show spinner when there are no articleStore. in state
        articles.length > 0 ? (
          articles.map(article => {
            return <ArticleCard key={article.id} article={article} />;
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

export default view(HomePage);
