import {useEffect,useState} from 'react'
import { connect } from 'react-redux';
import { fetchMails, removeUnread ,addRead} from '../Redux';
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom';

const UnRead = (props) => {
 const {list,fetchMails}=props
const itemsPerPage=10;
const [currentPage,setCurrentPage]=useState(0)
  useEffect(()=>{
    fetchMails()
  },[])

const handlePageClick=(data)=>{
  setCurrentPage(data.selected)
}

const displayList=list.slice(
  currentPage*itemsPerPage,(currentPage+1)*itemsPerPage
)

  return (
    <div>
       <ul>
          {displayList.map(item => (
            <Link
              key={item.id}
              to={`/unread/${item.id}`}
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
      <ReactPaginate
        pageCount={Math.ceil(list.length / itemsPerPage)}
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
    list: state.unRead.list 
  };
}

const mapDispatchToProps=dispatch=>{
  return{
    fetchMails:()=>dispatch(fetchMails()),
    removeUnread:(id)=>dispatch(removeUnread(id)),
    addRead:(data)=>dispatch(addRead(data))
  }
}
export default connect(mapToStateProps,mapDispatchToProps)(UnRead) 
