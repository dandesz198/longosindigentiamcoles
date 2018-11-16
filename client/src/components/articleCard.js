import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  margin: 2% auto;
  box-shadow: 1px 1px 10px 3px black;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 2%;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 2%;
`;
class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.redirectToArticle = this.redirectToArticle.bind(this);
  }

  redirectToArticle() {}
  render() {
    return (
      <Container onClick={this.redirectToArticle}>
        <Title>{this.props.title}</Title>
        <Paragraph>{this.props.description || "[No description]"}</Paragraph>
      </Container>
    );
  }
}

export default ArticleCard;
