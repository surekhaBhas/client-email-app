import {useState,useEffect} from 'react'
import axios from 'axios';
import DOMPurify from 'dompurify';
import './HomePage.css';
import { useParams,useLocation } from 'react-router-dom'; 
import HomePage from './HomePage';
import moment from 'moment';
import './Particular.css';
import { addFavorite } from '../Redux';
import { connect } from 'react-redux';
const ParticularMail = (props) => {

    const {id}=useParams()
    const [mail,setMail]=useState({})
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get('date');
  const name = searchParams.get('name');
  const formattedDate = moment(date).format('MMMM DD YYYY, hh:mm:ss a');

   console.log(searchParams)
 
    useEffect(()=>{
    const getMailData=async()=>{
        try{
            const response= await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`)
            console.log(response.data.body)
            setMail(response.data)
            
        }catch(err){
            console.log(err)
            
        }
    }
    getMailData()
    },[id])
    const sanitizedHTML = DOMPurify.sanitize(mail.body);
    console.log(props.listOfArray)
  return (
    <div className='main'>
        <div style={{width:"40vw"}}> <HomePage/></div>
      
  <div className='display-details'>
          <div className="display-mail">
          <div className='Profile-letter'><h1>{name.charAt(0).toUpperCase()}</h1></div>
          <div className='details-container'>  
            <div className='favorite'>
            <p className='label'> <span>{name} </span></p>
            <button className='favorite-btn' onClick={() => props.addFavorite(id)}>
                Mark as favorite
            </button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          </div>
        
          </div>
         
     
  </div>
    </div>
   
  )
}
const mapStateToProps = (state) => {
    return {
      listOfArray: state.Favorite.listOfArray
    };
  };
  


const mapDispatchToProps=dispatch=>{
return {
    addFavorite: (id) => dispatch(addFavorite(id))
}}
export default connect(mapStateToProps,mapDispatchToProps)(ParticularMail) 
