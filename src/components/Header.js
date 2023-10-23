import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
      <span> Filter By</span>

      <div className='Nav-head'>
        <NavLink to='/' exact="true" activeclassname="active" className="nav-item">
          Read
        </NavLink>
        <NavLink to='/unread' activeclassname="active" className="nav-item">
          UnRead
        </NavLink>
        <NavLink to='/favorite' activeclassname="active" className="nav-item">
          Favorite
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
