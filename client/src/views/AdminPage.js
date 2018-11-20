import React, {Component} from 'react';
import Sidenav from './../components/Admin/Sidenav'
import styled from 'styled-components'
import {Router, view} from 'react-stax';
import Posts from './../components/Admin/Posts'
import Users from './../components/Admin/Users'
import RegPage from './/RegPage'
import user from './../stores/userStore'


const AdminWrapper = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 94.5vh;
`;

class AdminPage extends Component{



    render(){
        return(
            <AdminWrapper>
                <Sidenav/>
                <Router defaultPage="posts">
                    <Posts page='posts'/>
                    <Users page='users'/>
                    <RegPage page='reg'/>
                </Router>
            </AdminWrapper>
            
        )
    }
}



export default view(AdminPage);