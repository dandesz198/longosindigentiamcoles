import React, { Component } from "react";
import { get } from "../api/article";
import styled from "styled-components";
import articleStore from "../stores/article";
import { view, params } from "react-stax";

const MainContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: left;
  p {
    font-size: 1.25rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  a {
    text-decoration: none;
    color:#3498DB;
    transition: 0.3s;
  } 
  a:hover {
    color: #1B4F72;
    text-decoration: underline;  
  }
`;

const Title = styled.h1`
  text-align: center;
`;

class articlePage extends Component {
  async componentDidMount() {
    articleStore.article = await get(params.id);
  }

  render() {
    console.log(articleStore.article.title);

    return (
      <MainContainer>
        <Title>{articleStore.article.title}</Title>
        <div
          dangerouslySetInnerHTML={{ __html: articleStore.article.content }}
        />
      </MainContainer>
    );
  }
}

export default view(articlePage);
