import React, {Component} from 'react';
import {store, route, Link} from 'react-stax';
import axios from 'axios';
import user from './../stores/userStore';
import styled from 'styled-components'

const formValues = store({
    email: String,
    password: String
})

const TopDevNav = styled.div`
  background-color: #1e272e;
  display: flex;
  justify-content: space-evenly;
  a{
    transition: .2s all ease;
    padding: 1vh 4vh;
    color: white;
    text-decoration: none;
    &:hover{
      background-color: #2f3542;
    }
  }
`;

class LoginPage extends Component{

    handleChangeEmail = (e)=>{
        formValues.email = e.target.value;
        console.log(formValues.email)
        
    }
    handleChangePassword = (e)=>{
        formValues.password = e.target.value;
        console.log(formValues.password)

    }

    onSubmit = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3005/api/login?email=${formValues.email}&password=${formValues.password}`)
          .then(function (response) {
            user.email = response.data.user.email;
            user.name = response.data.user.name;
            user.isLoggedIn = true;
            console.log(user.email)
            console.log(user.name)
            console.log(user.isLoggedIn)
            console.log(response);
            route({to: 'admin'})
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){


        return(
            <div>
                <TopDevNav>
          <Link to="/admin">Admin</Link>
          <Link to="home">Home</Link>
        </TopDevNav>
                <h1>Login Page</h1>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='email' > email</label> <br />
                    <input type='text' placeholder='email' onChange={this.handleChangeEmail} /> <br />
                    <label htmlFor='password'>Password</label> <br />
                    <input type='password' placeholder='Password' onChange={this.handleChangePassword}  /> <br />
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
    
}


export default LoginPage;