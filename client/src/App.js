import React, { Component } from 'react';
import  {Router, Link} from 'react-stax'
import './App.css';
import HomePage from './views/HomePage';
import AdminPage from "./views/AdminPage"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="admin">Admin</Link>
        <Link to="/">Home</Link>
        <Router>
        <HomePage page="/"/>
        <AdminPage page="admin"/>
        </Router>
        
      </div>
    );
  }
}

export default App;
