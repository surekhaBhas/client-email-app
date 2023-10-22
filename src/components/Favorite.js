import {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

import { addFavorite } from '../Redux';
import { connect } from 'react-redux';
const Favorite = (props) => {
    const [data,setData]=useState([]);
    const [favorite,setFavorite]=useState([])
    const [loading,setLoading]=useState(true)
    const favoriteItem = [...new Set(props.listOfArray.slice(1))];


    useEffect(()=>{
        const getMailData=async()=>{
            try{
                const response= await axios.get('https://flipkart-email-mock.now.sh/?page=1')
                setData(response.data.list)
                console.log(response.data.list)
                setLoading(false)
                
            }catch(err){
                console.log(err)
                setLoading(false)
            }
        }
        getMailData()
        const filteredData = data.filter(item => favoriteItem.includes(item.id));
       setFavorite(filteredData)

      
    },[])
 
    
  return (
    <div className='mail-container'>
        
    {
     !loading && favorite.length?<ul>
      {favorite.map(item=><Link
key={item.id}
to={`/mail/${item.id}?name=${item.from.name}&date=${item.date}`}
>
<li  class='each-mail'>
          <div className='profile'><h1>{item.from.name.charAt(0).toUpperCase()}</h1></div>
          <div className='details'>
              <p className='label'>From: <span>{item.from.name} {`<${item.from.email}>`} </span></p>
              <p className='label'>Subject: <span>{item.subject}</span></p>
              <p style={{marginBottom:"10px"}}>{item.short_description}</p>
              <p>{new Date(item.date).toLocaleString()}</p>
          </div>
      </li></Link>)}
     </ul>:<li className='loading'>No favorites</li>
    }
    {loading && <div className='loading'>Loading...</div>}
    
  </div>
  )
}
const mapStateToProps = (state) => {
    return {
      listOfArray: state.Favorite.listOfArray
    };
  };
  
export default connect(mapStateToProps)(Favorite) 
