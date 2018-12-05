import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-stax";
import userStore from "../../stores/user";
import { getMe } from "../../api/users";

const StyledContainer = styled.div`
  list-style-type: none;
  padding: 0;
  position: relative;
  margin: 0;
  height: 100%;
  display: flex;
  background-color: #1e272e;
  box-sizing: border-box;
  flex-direction: column;
  a {
    width: 100%;
    box-sizing: border-box;
    margin: 4vh 0 0 0;
    padding: 1.5vh 0;
    background-color: #ff4757;
    color: white;
    transition: 0.2s ease background-color;
    text-decoration: none;
    &:hover {
      background-color: #ff6b81;
    }
  }
`;

const CurrentUser = styled.div`
  position: absolute;
  font-size: 1.1rem;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  background-color: #2f3542;
  color: white;
`;

const List = () => {
  return (
    <StyledContainer>
      <Link to="article">Articles</Link>
      <Link to="editor">New Article</Link>
      <Link to="register">Register New User</Link>

      <CurrentUser>
        Hali, <b>{userStore.name || "Miért vagy itt?!"}</b>
      </CurrentUser>
    </StyledContainer>
  );
};

class Sidenav extends Component {
  async componentDidMount() {
    console.log(await getMe());
  }
  render() {
    return <List />;
  }
}

export default Sidenav;
