import React, { Component } from "react";
import Sidenav from "./../components/Admin/Sidenav";
import styled from "styled-components";
// import { Router, view, route } from "react-stax";
import { Router, view, route } from "react-stax";
import Posts from "./../components/Admin/Posts";
import NewArticle from "./../components/Admin/NewArticle";
import Users from "./../components/Admin/Users";
import RegPage from "./RegPage";
import user from './../stores/userStore'

const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 100vh;
`;

class AdminPage extends Component {
  onRoute() {
     !user.isLoggedIn && route({to: 'login'})
  }

  render() {
    return (
      <AdminWrapper>
        <Sidenav />
        <Router defaultPage="articles" onRoute={this.onRoute}>
          <Posts page="articles" />
          <NewArticle page="newarticle" />
          <Users page="users" />
          <RegPage page="reg" />
        </Router>
      </AdminWrapper>
    );
  }
}

export default view(AdminPage);
