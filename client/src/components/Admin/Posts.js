import React from "react";
import Draft from "./Draft";
import { Router, Link } from "react-stax";
import styled from "styled-components";
import articleStore from "./../../stores/articleStore";

const ListWrapper = styled.div`
  a,
  p {
    display: inline-grid;
    width: 80%;
    margin: 1rem auto;
    grid-template-columns: 20% 30% 50%;
    background-color: #1e272e;
    padding: 1rem;
    color: white;
    text-decoration: none;
  }
  p {
    background-color: transparent;
    color: #1e272e;
    margin-bottom: -1rem;
    font-size: 1.3rem;
  }
`;

const List = () => {
  const { articles } = articleStore;
  console.log({ articles })
  return (
    <div>
      <ListWrapper>
        <p>
          <span>id</span>
          <span>Author</span>
          <span>Title</span>
        </p>
        {articles.map(article => (
          <Link key={article.id} to={`../editor/?id=${article.id}`}>
            <span>{article.id}</span>
            <span>{article.author}</span>
            <span>{article.title}</span>
            <br />
          </Link>
        ))}
      </ListWrapper>
    </div>
  );
};

const Posts = () => {
  return (
    <Router defaultPage="list">
      <List page="list" />
      <Draft page="editor" />
    </Router>
  );
};

export default Posts;
