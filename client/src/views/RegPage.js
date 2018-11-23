import React, { Component } from "react";
import { store } from "react-stax";
import {register} from "./../api/users";

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
      <div>
        <h1>Reg Page</h1>
        <form onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}

export default LoginPage;
