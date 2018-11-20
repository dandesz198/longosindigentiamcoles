import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-stax'

const Ul = styled.div`
    list-style-type: none;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    background-color: #1e272e;
    box-sizing: border-box;
    flex-direction: column;
    a{
    width: 100%;
    box-sizing: border-box;
    margin: 4vh 0 0 0;
    padding: 1.5vh 0;
    background-color: #485460;
    color: white;
    transition: .2s ease background-color;
    text-decoration:none;
    &:hover{
        background-color: #808e9b;
    }
    }
`;
const List = () => {
    return (

        <Ul>
            <Link to={`posts`}>Edit Posts</Link>
            <Link to={`users`}>Users</Link>
            <Link to={`reg`}>Register New User</Link>
            <Link to={`../home`}>User Home</Link>

        </Ul>
    )
}

const Sidenav = ({ match }) => {
    return (
        <List match={match} />
    )
}

export default Sidenav;