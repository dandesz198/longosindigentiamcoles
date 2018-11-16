import React from 'react'
import { NavLink} from 'react-router-dom';


const Sidenav = ({ match }) => {
    return(
        <ul className='Sidenav'>
            <li>
            <NavLink
                className="Sidenav_Link"
                activeClassName='Sidenav_Link active'
                to={`${match.path}/users`}
            >
                <span>Users</span>
            </NavLink>
            </li>


            <li>
            <NavLink
                className="Sidenav_Link"
                activeClassName='Sidenav_Link active'
                to={`${match.path}/post`}
            >
                <span>Posts</span>
            </NavLink>
            </li>

            <li>
            <NavLink
                className="Sidenav_Link"
                activeClassName='Sidenav_Link active'
                to={`${match.path}/roles`}
            >
                <span>Roles</span>
            </NavLink>
            </li>

            <li>
            <NavLink
                className="Sidenav_Link"
                activeClassName='Sidenav_Link active'
                to={`${match.path}/general`}
            >
                <span>General Conetnt</span>
            </NavLink>
            </li>
        </ul>
    )
}
export default Sidenav;