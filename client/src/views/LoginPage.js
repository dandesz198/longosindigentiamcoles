import React, { Component } from "react";
import { store, route, Link } from "react-stax";
import user from "./../stores/userStore";
import styled from "styled-components";
import { login } from './../api/users'

const formValues = store({
    email: String,
    password: String
});

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
        console.log(formValues.email);
    };
    handleChangePassword = e => {
        formValues.password = e.target.value;
        console.log(formValues.password);
    };

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = formValues
        login({ email, password }).then(data => {
            const { name, role } = data
            user.name = name
            user.role = role
            user.email = email
            user.isLoggedIn = true;
            route({ to: 'admin' })
        });
    };

    render() {
        return (
            <div>
                <TopDevNav>
                    <Link to="/admin">Admin</Link>
                    <Link to="/home">Home</Link>
                </TopDevNav>
                <h1>Login Page</h1>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="email"> email</label> <br />
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
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default LoginPage;
