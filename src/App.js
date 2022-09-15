import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Users from './Components/Users'
import Pagination from './Components/Pagination'
function App() {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);
  const [usersPerPage]=useState(5);
  const [inputValue,setInputValue]=useState("");
  const [toggleUsers,setToggleUsers]=useState([]);
  const [name,setName] = useState(false);
  useEffect(()=>{
    const fetchUsers=async()=>{
      setLoading(true);
      const res=await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setLoading(false);
    }
    fetchUsers();
  },[]);
  const indexOfLastUser=currentPage*usersPerPage;
  const indexOfFirstuser=indexOfLastUser-usersPerPage;
  const currentUsers =users.slice(indexOfFirstuser,indexOfLastUser);
  
  const paginate=(pagenumber)=>setCurrentPage(pagenumber);
  
   const handleToggle=()=>{
      setName(!name)
      setUsers(toggleUsers);
      setToggleUsers(users);
  }


   return <>
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>List Of Users</h1>
      <div style={{marginBottom:"10px"}}>
        <input 
        style={{width:"300px",borderRadius:"8px", marginRight:"5px"}}
        type="text" 
        placeholder="Search User By name" 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}  />
        
        <button className='btn btn-success' style={{borderRadius:"8px"}} onClick={handleToggle}>
        {name ? "Show users" : "Hide users"}
        </button>
      </div>
     <Users users={currentUsers} loading={loading} query={inputValue} />
     <div >
     <Pagination style={{display:"inline-block",float:"left"}}  usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
    
     </div>
    </div>
 
  </>
}


export default App;
