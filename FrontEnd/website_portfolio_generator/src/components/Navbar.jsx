import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { doLogOut } from '../auth/AuthenticatioHandler';

function Navbar() {
  const navigate = useNavigate();

  const logOutClicked = () => {
    console.log("logout clicked")
    doLogOut();
    navigate("/login");
  }

  return (
    <div class="navbar">
      <ul className='navbar-list'>
        <li><Link to={"/user/home"}> Home</Link></li>
        <li><Link to={"/user/user-form"}> Fill Details</Link></li>
        <li className='logoutLi' onClick={logOutClicked}> Log out</li>
      </ul>
    </div>
  )
}

export default Navbar