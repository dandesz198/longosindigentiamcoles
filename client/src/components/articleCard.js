import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-stax";

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
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Paragraph>{this.props.description || "[No description]"}</Paragraph>
        <Link to={"/articles/" + this.props.id}>Read more</Link>
      </Container>
    );
  }
}

export default ArticleCard;
