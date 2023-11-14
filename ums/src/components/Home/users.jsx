import IconButton from "@mui/material/IconButton";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineEllipsis
} from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import defUserImage from "../../asset/defUserImage.png";
import Data from "./Data.json";
import Delete from "./delete";

const Users = () => {
  const [users, setUsers] = useState(Data);
 
  //sort 
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.ID - userB.ID;
      }
      return userB.ID - userA.ID;
    });
    setUsers(usersCopy);
  };
  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userB.Name.localeCompare(userA.Name);
      }
      return userA.Name.localeCompare(userB.Name);
    });
    setUsers(usersCopy);
  };
  const sortByRole = () => {
    setSorted({ sorted: "role", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
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
    setSorted({ sorted: "status", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userB.Status.localeCompare(userA.Status);
      }
      return userA.Status.localeCompare(userB.Status);
    });
    setUsers(usersCopy);
  };
  // search 
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
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const usersToDisplay = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageRange = 6;
  let minPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  let maxPage = minPage + pageRange - 1;

  if (maxPage > totalPages) {
    maxPage = totalPages;
    minPage = Math.max(1, maxPage - pageRange + 1);
  }

  const pageNumbers = Array.from(
    { length: maxPage - minPage + 1 },
    (_, i) => minPage + i
  );

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

  
  return (
    <>
      <div className="content-wrapper">
        <div className="wrapper">
          <h3 className="d-sm-block d-md-block d-lg-none text-center">
            <a
              href="/users"
              style={{
                margin: 30,
                fontSize: 15,
                textDecoration: "none",
                color: "black",
              }}>
              {" "}
              Users
            </a>
            <a
              href="/role"
              style={{
                margin: 25,
                fontSize: 15,
                textDecoration: "none",
                color: "black",
              }}>
              {" "}
              Roles
            </a>
          </h3>
          <h2>Users</h2>
          <div className="d-flex justify-content-end align-items-center mb-2">
            <div className="dropdown mr-2">
              <button style={{marginLeft: "10px", marginBottom: "10px", }}
                className="btn btn-secondary "
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <BiSortAlt2 />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" onClick={sortById}>
                  ID
                </button>
                <button className="dropdown-item" onClick={sortByName}>
                  Name
                </button>
                <button className="dropdown-item" onClick={sortByRole}>
                  Role
                </button>
                <button className="dropdown-item" onClick={sortByDc}>
                  Date Created
                </button>
                <button className="dropdown-item" onClick={sortByStatus}>
                  Status
                </button>
              </ul>
            </div>
            <div className="search-container" style={{marginLeft: "10px", marginBottom: "10px", }} >
              <input 
                type="text"
                placeholder="Search"
                value={searchPhrase}
                onChange={search}
                style={{ width: "200px" }}
              />
            </div>
            <button className="btn btn-primary" style={{marginLeft: "10px", marginBottom: "10px", }}>
              <Link
                className="text-white"
                style={{ textDecoration: "none" }}
                to="/user/adduser">
                Add User
              </Link>
            </button>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Date Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {usersToDisplay.map((user) => (
                  <tr key={user.ID}>
                    <td>{user.ID}</td>
                    <td>
                      <img
                        src={defUserImage}
                        alt="Profile Image"
                        style={{}}></img>
                    </td>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Role}</td>
                    <td>{user.Date_Created}</td>
                    <td>{user.Status}</td>
                    <td>
                      <div className="d-flex d-sm-inline-flex">
                        <span className=" ">
                          <Link to="/user/adduser">
                            <IconButton
                              className="text-success"
                              style={smallButtonStyle}>
                              <BsFillPencilFill />
                            </IconButton>
                          </Link>
                        </span>
                        <span className=" d-none d-sm-none  d-md-none d-lg-block">
                          <Delete />
                        </span>
                        <span className=" d-none d-sm-none  d-md-none d-lg-block">
                          <Link to="/user/profile">
                            <IconButton
                              className="text-dark"
                              style={smallButtonStyle}>
                              <AiOutlineEllipsis />
                            </IconButton>
                          </Link>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="d-block" style={{marginTop: "10px", marginBottom: "10px", }}>
            <nav class="d-flex justify-content-end align-items-center mb-2 ">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" onClick={prePage}>
                    <AiOutlineCaretLeft />
                  </a>
                </li>
                {pageNumbers.map((number) => (
                  <li
                    className={`page-item ${
                      currentPage === number ? "active" : ""
                    }`}
                    key={number}>
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => changeCPage(number)}>
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
      </div>
    </>
  );
};

export default Users;