import {useEffect,useState} from 'react'
import { connect } from 'react-redux';

import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom';

const Read = ({ReadList}) => {

    const itemsPerPage=10;
    const [currentPage,setCurrentPage]=useState(0)


    const handlePageClick=(data)=>{
          setCurrentPage(data.selected)
      }
    const displayList=ReadList.slice(
        currentPage*itemsPerPage,(currentPage+1)*itemsPerPage
      )
  return (
    <div>
       <ul>
          {displayList.map(item => (
            <Link
              key={item.id}
              to={`/mail/${item.id}?name=${item.from.name}&date=${item.date}`}
            >
             <li className='each-mail'>
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
      <ReactPaginate
        pageCount={Math.ceil(ReadList.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'} 
      />
    </div>
  )
}
const mapToStateProps = state => {
    return {
      ReadList: state.read.ReadList 
    };
  }
  

export default connect(mapToStateProps)(Read) 
