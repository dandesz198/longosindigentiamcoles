import React, { Component } from "react";
import styled from "styled-components";
import { Link, route } from "react-stax";
import editorStore from "../../stores/editor";
import userStore from "../../stores/user";
import { getMe } from "../../api/users";

const StyledContainer = styled.div`
  list-style-type: none;
  padding: 0;
  position: relative;
  margin: 0;
  height: 100%;
  display: flex;
  background-color: #fafafa;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 5px 0 15px #ececec;
  a,
  button {
    border: 0;
    padding: 10px 0;
    margin: 0;
    padding-left: 20px;
    color: black;
    transition: 0.1s ease-in-out all;
    text-align: left;
    font-size: 16px;
    text-decoration: none;
    background-color: #ededed;
    :hover {
      background-color: #cecece;
      transition: 0.1s ease-in-out all;
    }
    :focus {
      outline: none;
    }
  }
`;

const Heading = styled.p`
  margin: 0;
  padding: 0;
  margin: 30px 0 0 20px;
  text-align: left;
  color: black;
  font-size: 36px;
  font-weight: 800;
`;

const Subheading = styled(Heading)`
  margin: 20px;
  font-size: 20px;
  font-weight: 200;
`;

const List = () => {
  return (
    <StyledContainer>
      <Heading>Longos Indigentiam Coles</Heading>
      <Subheading>
        Howdy, <b>{userStore.name}</b>!
      </Subheading>
      <Link to="article">Articles</Link>
      <button
        onClick={() => {
          editorStore.empty();
          route({ to: "admin/editor" });
        }}
        style={{
          border: "1px #CECECE",
          borderStyle: "solid none"
        }}
      >
        New Article
      </button>
      <Link to="register">Register New User</Link>
      <Link to="/" style={{ marginTop: "auto" }}>
        Go to home
      </Link>
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
