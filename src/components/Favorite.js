import {useState,useEffect} from 'react'

import { Link } from 'react-router-dom';
import './HomePage.css';

import { connect } from 'react-redux';
const Favorite = (props) => {
 

    const favoriteItem =props.listOfArray
    console.log(favoriteItem)

  return (
    <div className='mail-container'>
    {
  favoriteItem.length ? (
    <ul>
    {favoriteItem.map(item => (
      <Link
        key={item.id}
        to={`/mail/${item.id}?name=${item.from.name}&date=${item.date}`}
      >
       <li className='each-mail' onClick={() => {props.removeUnread(item.id);props.addRead(item);}}>
          <div className='profile'><h1>{item.from.name.charAt(0).toUpperCase()}</h1></div>
          <div className='details'>
            <p className='label'>From: <span>{item.from.name} {`<${item.from.email}>`}</span></p>
            <p className='label'>Subject: <span>{item.subject}</span></p>
            <p style={{ marginBottom: "10px" }}>{item.short_description}</p>
            <p>{new Date(item.date).toLocaleString()}</p>
          </div>
        </li>
      </Link>
    ))}
  </ul>
  ) : <li className='loading'>No favorites</li>
  
}

   
    
  </div>
  )
}
const mapStateToProps = (state) => {
    return {
      listOfArray: state.Favorite.listOfArray
    };
  };
  
export default connect(mapStateToProps)(Favorite) 