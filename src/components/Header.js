import React  ,{useState} from 'react';
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <div className='nav'>
      <span> Filter By</span>

      <div className='Nav-head'>
        <Link to='/'><button className='nav-item active' >Read</button></Link>
        <Link to="/unread"><button className='nav-item'>UnRead</button></Link>
        <Link to='/favorite'><button className='nav-item'>Favorite</button></Link>
      </div>
    </div>
  )
}

export default Header
