import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';
import { Button } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();
  const logOutClicked = () => {
    console.log("logout clicked")
    UserService.logoutUser()
      .then(response => {
        console.log(response);
        navigate("/login");
      })
      .catch(error => {
        console.error("There was an error while registering!", error);
      });
  }

  return (
    <div class="navbar">
      <ul className='navbar-list'>
        <li><Link to={"/"}> Home</Link></li>
        <li><Link to={"/user-form"}> Fill Details</Link></li>
        <li ><Button className='logoutBtn' onClick={logOutClicked}>Log out</Button></li>
      </ul>
    </div>
  )
}

export default Navbar