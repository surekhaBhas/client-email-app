import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './HomePage.css';
import { useParams} from 'react-router-dom';
import UnRead from './UnRead';
import './Particular.css';
import { addFavorite } from '../Redux';
import { connect } from 'react-redux';

const UnReadList = ({ MailItem, addFavorite }) => {
  const { id } = useParams();
  const [mail, setMail] = useState({});


  useEffect(() => {
    const getMailData = async () => {
      try {
        const response = await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
        setMail(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMailData();
  }, [id]);

  const sanitizedHTML = DOMPurify.sanitize(mail.body);


  return (
    <div className='main'>
      <div style={{ width: "40vw" }}> <UnRead/></div>

      <div className='display-details'>
        <div className="display-mail">
          <div className='Profile-letter'><h1>{MailItem.from.name.charAt(0).toUpperCase()}</h1></div>
          <div className='details-container'>
            <div className='favorite'>
              <div>
                <p className='label'> <span>{MailItem.from.name} </span></p>
                <p>{new Date(MailItem.date).toLocaleString()}</p> 
              </div>

              <button className='favorite-btn' onClick={() => addFavorite(MailItem)}>

                Mark as favorite
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listOfArray: state.Favorite.listOfArray,
    MailItem: state.select.MailItem,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (MailItem) => dispatch(addFavorite(MailItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnReadList);
