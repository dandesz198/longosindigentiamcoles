import React, { Component } from "react";
import './UserStyle/styles.css';
import {testDataUsers} from "./../PanelTest";



class UserTable extends Component {
    render() {
        let tableRows = testDataUsers.map(function (user, index) {
            return(
                <div className="table_row">
                    <div className="name">{user.username}</div>
                    <div className="email">{user.email}</div>
                    <div className="role">{user.role}</div>
                </div>
                );
        });

        return (
            <div className="table">
                <div className="table_row head">
                    <div>Name</div>
                    <div>E-mail</div>
                    <div>Role</div>
                </div>
                <div className="scrollable">
                {tableRows}
                </div>
                
            </div>
        )
    }
}



class PanelUsers extends Component {


    render() {
        return (
            <div className="Panel">
                <h1>Users</h1>
                <div className="IdegesitoFos">
                <UserTable />
                </div>
                
            </div>
        )
    }
}



export default PanelUsers;