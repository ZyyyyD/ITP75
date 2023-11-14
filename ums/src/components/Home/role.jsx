import IconButton from "@mui/material/IconButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { AiFillCloseCircle, AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineEllipsis } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import Data from './Data.json';

const Users = () => {
  const [users, setUsers] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const usersToDisplay = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / usersPerPage);
//sort shit
const [sorted, setSorted] = useState({sorted:"id",reversed:false});

const sortById = () => {
  setSorted({ sorted:"id", reversed : !sorted.reversed});
  const usersCopy = [...users];
  usersCopy.sort((userA, userB) =>{
    if(sorted.reversed){
      return userA.ID - userB.ID;
    }
    return userB.ID - userA.ID;
  });
  setUsers(usersCopy);
};
const sortByName = () => {
  setSorted({ sorted:"name", reversed : !sorted.reversed});
  const usersCopy = [...users];
  usersCopy.sort((userA, userB) =>{
    
    if(sorted.reversed){
      return userB.Name.localeCompare(userA.Name);
    }
    return userA.Name.localeCompare(userB.Name);
  });
  setUsers(usersCopy);
};
const sortByRole = () => {
  setSorted({ sorted:"role", reversed : !sorted.reversed});
  const usersCopy = [...users];
  usersCopy.sort((userA, userB) =>{
    
    if(sorted.reversed){
      return userB.Role.localeCompare(userA.Role);
    }
    return userA.Role.localeCompare(userB.Role);
  });
  setUsers(usersCopy);
};
const sortByDc = () => {
  setSorted({ sorted: "date_created", reversed: !sorted.reversed });
  const usersCopy = [...users];
  usersCopy.sort((userA, userB) => {
    const dateA = new Date(userA.Date_Created);
    const dateB = new Date(userB.Date_Created);

    if (sorted.reversed) {
      return dateA - dateB;
    }

    return dateB - dateA;
  });

  setUsers(usersCopy);
};

const sortByStatus = () => {
  setSorted({ sorted:"status", reversed : !sorted.reversed});
  const usersCopy = [...users];
  usersCopy.sort((userA, userB) =>{
    
    if(sorted.reversed){
      return userB.Status.localeCompare(userA.Status);
    }
    return userA.Status.localeCompare(userB.Status);
  });
  setUsers(usersCopy);
};
  // search shit
  const [searchPhrase, setSearchPhrase] = useState("");
 const search = (event) => {
  const searchTerm = event.target.value.toLowerCase();

  const matchedUsers = Data.filter((user) => {
    return (
      user.Name.toLowerCase().includes(searchTerm) ||
      user.ID.toString().includes(searchTerm) ||
      user.Role.toLowerCase().includes(searchTerm) ||
      user.Status.toLowerCase().includes(searchTerm) ||
      user.Date_Created.toLowerCase().includes(searchTerm)
    );
  });
    setUsers(matchedUsers);
    setSearchPhrase(event.target.value);
  };
  const smallButtonStyle = {
    fontSize: "13px", 
    
  };
  //range of page number
  const pageRange = 5;
  let minPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  let maxPage = minPage + pageRange - 1;

  // Adjust the range for the last set of pages
  if (maxPage > totalPages) {
    maxPage = totalPages;
    minPage = Math.max(1, maxPage - pageRange + 1);
  }

  const pageNumbers = Array.from({ length: maxPage - minPage + 1 }, (_, i) => minPage + i);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(page) {
    setCurrentPage(page);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  //repeated 
  const countRepeatedNames = (users) => {
    const nameCounts = {};
    users.forEach((user) => {
      const name = user.Role;
      nameCounts[name] = (nameCounts[name] || 0) + 1;
    });
    return nameCounts;
  };
  const nameCounts = countRepeatedNames(users);
  return (
    <>
    
      <div className="content-wrapper">
      <h3 className="d-sm-block d-md-block d-lg-none text-center">
                <a href="/users" style={{margin:30,fontSize:15,textDecoration: 'none',color:'black'}} > Users</a>
                <a href="/role" style={{margin:25,fontSize:15,textDecoration: 'none',color:'black'}}> Roles</a>
              </h3>
        <div className="wrapper">
          <h2>Roles</h2>
          <div className="d-flex justify-content-end align-items-center mb-2">
            <div className="dropdown mr-2">
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="search-container">
            <input type="text" placeholder="Search" value={searchPhrase} onChange={search} className="search-input" style={{ width: "200px" }} />
          </div>
          </div>

          <div className="ml-2">
            <button className="btn btn-primary" style={{marginLeft: "10px", marginBottom: "10px",}}>Add Role</button>
          </div>
          </div>
          </div>
          <div className="table-container">
          <table className="table">
    <thead>
      <tr>
        <th className="text-center">#</th>
        <th className="text-center">Name</th>
        <th className="text-center">Handles</th>
        <th className="text-center">Date Created</th>
        <th className="text-center">No. of Users</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
  {Object.keys(nameCounts).map((role, index) => {
    const roleUsers = users.filter(user => user.Role === role);
    const dateCreated = roleUsers.length > 0 ? roleUsers[0].Date_Created : "";

    // Extract unique module names for the current role
    const uniqueModules = [...new Set(roleUsers.flatMap(user => user.Handles))];
    

    return (
      <tr key={index}>
        <td className="centered-cell">{index + 1}</td>
        <td className="centered-cell">{role}</td>
        <td className="centered-cell">{uniqueModules.join(", ")}</td>
        <td className="centered-cell">{dateCreated}</td>
        <td className="centered-cell">{nameCounts[role]}</td>
        <td className="centered-cell">
          
          <div className="d-flex d-sm-inline-flex">
            <span className="">
              <IconButton className="text-success" style={smallButtonStyle}>
                <BsFillPencilFill />
              </IconButton>
            </span>
            <span className="d-none d-sm-none d-md-none d-lg-block">
              <IconButton className="text-danger" style={smallButtonStyle}>
                <AiFillCloseCircle />
              </IconButton>
            </span>
          </div>
        </td>
      </tr>

            );
            })}
          </tbody>
          </table>
          
          <nav className="d-flex justify-content-end align-items-center mb-2">
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  <AiOutlineCaretLeft />
                </a>
              </li>
              {pageNumbers.map((number) => (
                <li
                  className={`page-item ${currentPage === number ? 'active' : ''}`}
                  key={number}
                >
                  <a href="#" className="page-link" onClick={() => changeCPage(number)}>
                    {number}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  <AiOutlineCaretRight />
                </a>
              </li>
            </ul>
          </nav>
        
        </div>
      </div>
    </>
  );
};

export default Users;


