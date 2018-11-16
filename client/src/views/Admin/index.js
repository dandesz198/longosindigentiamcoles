import React, { Component } from "react";
import './styles/index.css'
import {Route} from 'react-router-dom';
import {PanelUsers, PanelGeneral, PanelPost, PanelRoles} from "./../../components/Admin/Panel"
import Sidenav from "./../../components/Admin/Sidenav/Sidenav"











const Admin = ({ match }) => {

    return(
        <div>
            <div className='Topnav'>
                <p>L I C <span>_Admin</span></p> 
            </div>
            <Sidenav match={match} />
            <div className="Panel_Wrapper">
            <Route path={match.path+"/post"} component={PanelPost} />
            <Route path={match.path+"/general"} component={PanelGeneral} />
            <Route path={match.path+"/roles"} component={PanelRoles} />
            <Route path={match.path+"/users"} component={PanelUsers} />
            </div>
            
            </div>
    )
            
            
    }


export default Admin;
