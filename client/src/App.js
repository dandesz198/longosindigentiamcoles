import React, { Component } from 'react';
import  {Router, Link} from 'react-stax'
import './App.css';
import styled from 'styled-components';
import HomePage from './views/HomePage';
import AdminPage from "./views/AdminPage"
import LoginPage from './views/LoginPage'

const TopDevNav = styled.div`
  background-color: #2f3542;
  display: flex;
  justify-content: space-evenly;
  a{
    transition: .2s all ease;
    padding: 1vh 4vh;
    color: white;
    text-decoration: none;
    &:hover{
      background-color: #57606f;
    }
  }
`;


class App extends Component {
  render() {
    return (
      <div className="App">

      <TopDevNav>
        <Link to="admin">Admin</Link>
        <Link to="home">Home</Link>
      </TopDevNav>
        <Router defaultPage="login">
        <HomePage page="home"/>
        <LoginPage page='login'/>
        <AdminPage page="admin"/>
        </Router>
        
      </div>
    );
  }
}

export default App;
