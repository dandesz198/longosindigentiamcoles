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

const Button = styled(Link)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  width: 10%;
  text-decoration: none;
  text-align: center;
  margin: 0.5em auto;
  padding: 0.5em 1em;
  transition: 0.3s;
  &:hover {
    color: white;
    background-color: palevioletred;
  }
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
  state = {
    description: ""
  };

  componentDidMount() {
    const desr = this.props.article.content.replace(/<[^>]*>/g, " ");
    this.setState({ description: desr.substring(0, 480) + "..." });
  }

  render() {
    return (
      <Container>
        <Title>{this.props.article.title}</Title>
        <Paragraph>{this.state.description}</Paragraph>
        <Button to="/articles" params={{ id: this.props.article.id }}>
          Read more
        </Button>
      </Container>
    );
  }
}

export default ArticleCard;
