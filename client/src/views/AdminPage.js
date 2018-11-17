import React from 'react';
import Sidenav from './../components/Admin/Sidenav'
import styled from 'styled-components'
import {Router} from 'react-stax';
import Posts from './../components/Admin/Posts'
import Users from './../components/Admin/Users'

const AdminWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 100vh;

`;


const AdminPage = ()=>{
    return(
        <AdminWrapper>
            <Sidenav/>
            <Router defaultPage="posts">
                <Posts page='posts'/>
                <Users page='users'/>
            </Router>
        </AdminWrapper>
        
    )
}


export default AdminPage;