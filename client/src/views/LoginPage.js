import React, { Component } from "react";
import { store, route, Link } from "react-stax";
import userStore from "./../stores/userStore";
import styled from "styled-components";
import { login } from "./../api/users";

const formValues = store({
  email: String,
  password: String
});

const Wrapper = styled.div`
  color: #2f3542;
  height: 100vh;
  overflow: hidden;
  form {
    h1 {
      margin-top: 0;
    }
    position: absolute;
    margin: auto;
    height: 200px;
    top: 0;
    bottom: 30vh;
    left: 0;
    right: 0;
    input[type="text"],
    input[type="password"] {
      border: 2px solid #2f3542;
      padding: 1vh;
      margin-bottom: 1rem;
    }
    input[type="submit"] {
      border: none;
      background-color: #2f3542;
      color: white;
      padding: 1vh;
      border-radius: 30px;
      transition: 0.2s ease background-color;
      &:hover {
        background-color: #747d8c;
      }
    }
  }
`;

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

class LoginPage extends Component {
  handleChangeEmail = e => {
    formValues.email = e.target.value;
  };
  handleChangePassword = e => {
    formValues.password = e.target.value;
  };

  componentWillMount() {
    console.log(userStore.token)
    // userStore.token && route({ to: "admin" });
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = formValues;
    login({ email, password }).then(data => {
      const { name, role } = data;
      userStore.name = name;
      userStore.role = role;
      userStore.email = email;
      route({ to: "admin" });
    });
  };

  render() {
    return (
      <Wrapper>
        <TopDevNav>
          <Link to="/admin">Admin</Link>
          <Link to="/home">Home</Link>
        </TopDevNav>
        <form onSubmit={this.onSubmit}>
          <h1>Log In</h1>
          <label htmlFor="email"> Email Address</label> <br />
          <input
            type="text"
            placeholder="example@domain.com"
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            required
            onChange={this.handleChangeEmail}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            placeholder="yourpassword142"
            required
            onChange={this.handleChangePassword}
          />{" "}
          <br />
          <input type="submit" />
        </form>
      </Wrapper>
    );
  }
}

export default LoginPage;
