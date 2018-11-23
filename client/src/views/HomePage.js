import React, { Component } from "react";
import ArticleCard from "../components/articleCard";
import styled, { keyframes } from "styled-components";
import { Link } from "react-stax";
import articleStore from '../stores/articleStore'


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
  render() {
    const { articles } = articleStore.article;
    return (
      <div>
        <TopDevNav>
          <Link to="/admin">Admin</Link>
          <Link to="home">Home</Link>
        </TopDevNav>
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
