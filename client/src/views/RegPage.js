import React, { Component } from "react";
import { store } from "react-stax";
import {register} from "./../api/users";
import styled from 'styled-components'

const Wrapper = styled.div`
    color:  #2f3542;
    position:relative;
    height: 100vh;
    overflow:hidden;
    form{
        h1{
            margin-top: 0;
        }
        position: absolute;
        margin: auto;
        height: 200px;
        top: 0;
        bottom: 30vh;
        left: 0;
        right: 0;
        input[type='text'], input[type='password']{
            border: 2px solid #2f3542;
            padding: 1vh;
            margin-bottom: 1rem;
        }
        input[type='submit']{
            border: none;
            background-color: #2f3542;
            color: white;
            padding: 1vh;
            border-radius: 30px;
            transition: .2s ease background-color;
            &:hover{
                background-color: #747d8c;
            }
        }
    }
`;


const formValues = store({
  email: String,
  role: 'admin',
  password: String
});

class LoginPage extends Component {
  handleChangeEmail = e => {
    formValues.email = e.target.value;
    console.log(formValues.email);
  };
  handleChangePassword = e => {
    formValues.password = e.target.value;
    console.log(formValues.password);
  };

  handleChangeName = e => {
    formValues.name = e.target.value;
    console.log(formValues.name);
  };

  onSubmit = e => {
    e.preventDefault();
    const {name, password, email, role} = formValues;
    register({ email, password, name, role })
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
        <h1>Register New Employee</h1>

          <label htmlFor="email"> Email</label> <br />
          <input
            type="text"
            placeholder="email"
            onChange={this.handleChangeEmail}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleChangePassword}
          />{" "}
          <br />
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleChangeName}
          />{" "}
          <br />
          <input type="submit" />
        </form>
      </Wrapper>
    );
  }
}

export default LoginPage;
