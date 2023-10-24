import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { addFavorite } from '../Redux';
import { connect } from 'react-redux';

const HomePage = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleMailData } = props;

  useEffect(() => {
    const getMailData = async () => {
      try {
        const response = await axios.get('https://flipkart-email-mock.now.sh/?page=1');
        setData(response.data.list);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getMailData();
  }, []);

  const getPage1Mail = async () => {
    try {
      const response = await axios.get('https://flipkart-email-mock.now.sh/?page=1');
      setData(response.data.list);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const getPage2Mail = async () => {
    try {
      const response = await axios.get('https://flipkart-email-mock.now.sh/?page=2');
      setData(response.data.list);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const handlingData = (item) => {
    handleMailData(item);
  }

  return (
    <div className='mail-container'>
      {!loading && data.length ? (
        <ul>
          {data.map(item => (
            <Link
              key={item.id}
              to={`/mail/${item.id}`}
            >
              <li className='each-mail' onClick={() => handlingData(item)}>
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
      ) : <li className='loading'>No mails</li>}

      {loading && <div className='loading'>Loading...</div>}

      <div className='page-tabs'>
        <button className='page-tab' onClick={getPage1Mail}>
          1
        </button>
        <button className='page-tab' onClick={getPage2Mail}>2</button>
      </div>
    </div>
  );
}

export default HomePage;
