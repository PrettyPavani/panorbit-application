import React from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
        <li className="sidebarlistitems">
            <Link to='/'></Link>
          </li>
          <li className="sidebarlistitems">
            <Link to='/profile'>Profile</Link>
          </li>
          <li className="sidebarlistitems">
            <Link to='/post'>Posts</Link>
          </li>
          <li className="sidebarlistitems">
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className="sidebarlistitems">
            <Link to='/todo'>ToDo</Link>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default Sidebar;
