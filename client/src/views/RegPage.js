import React, { Component } from "react";
import { store } from "react-stax";
import {register} from "./../api/users";
import styled from 'styled-components'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

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
        input[type='text'], input[type='password'], input[type="email"], .Dropdown-control{
            border: 2px solid #2f3542;
            padding: 1vh;
            margin-bottom: 1rem;
        }
        .Dropdown-root{
          width: 180px;
          margin: 0 auto 1rem auto;
        }
        input[type='submit']{
            border: none;
            background-color: #2f3542;
            color: white;
            padding: 1vh;
            border-radius: 30px;
            transition: .2s ease background-color;
            :hover{
                background-color: #747d8c;
            }
        }
    }
`;


const formValues = store({
  email: String,
  role: String,
  password: String,
});

const options = [
  { value: 'admin', label: 'Admin' },
  { value: 'publisher', label: 'Publisher'},
  { value: 'moderator', label: 'Moderator'}
]
const defaultOption = options[0]



class LoginPage extends Component {
  handleChangeEmail = e => {
    formValues.email = e.target.value;
  };
  handleChangePassword = e => {
    formValues.password = e.target.value;
  };

  handleChangeName = e => {
    formValues.name = e.target.value;
  };
  handleChangeRole = e => {
    console.clear()
    formValues.role = e.value;
  };

  onSubmit = e => {
    e.preventDefault();
    const {name, password, email, role} = formValues;
    register({ email, password, name, role})
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
        <h1>Register New Employee</h1>

        <Dropdown 
          options={options}
            onChange={this.handleChangeRole}
            value={defaultOption}
            placeholder="Select an option"
          />
            {" "}
          <label htmlFor="email"> Email</label> <br />
          <input
            required
            type="email"
            placeholder="email"
            onChange={this.handleChangeEmail}
          />{" "}
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            required
            type="password"
            placeholder="Password"
            onChange={this.handleChangePassword}
          />{" "}
          <br />
          <label htmlFor="name">Name</label> <br />
          <input
            required
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
