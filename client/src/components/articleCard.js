import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-stax";

const Container = styled(Link)`
  color: black;
  text-decoration: none;
  width: 60%;
  margin: 1% auto;
  border-bottom: 3px solid #ECF0F1
  display: flex;
  text-align: left;
  flex-direction: column;
  transition: 0.3s;
  &:hover {
    color: #424949;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 2% 4%;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 2% 4%;
`;

class ArticleCard extends Component {
  state = {
    description: ""
  };

  componentDidMount() {
    const desr = this.props.article.content.replace(/<[^>]*>/g, " ");
    this.setState({ description: desr.substring(0, 480) + "..." });
  }

  render() {
    return (
      <Container to="/articles" params={{ id: this.props.article.id }}>
        <Title>{this.props.article.title}</Title>
        <Paragraph>{this.state.description}</Paragraph>
      </Container>
    );
  }
}

export default ArticleCard;
