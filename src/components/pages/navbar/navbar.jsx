import React from 'react';
import '../../css/navbar_css/Navbar.css';
import Logo from '../../../assets/Logo.png'

const Navbar = () => {
  
  return (
    <nav className='Navbar'>
      <div className="logo-section">
        <img src={Logo} className="Logo"/>
      </div>
      <ul className="navbar">
        <li>Courses</li>
        <li>Team</li>
        <li>Eleltron platform</li>
        <li>Offerta</li>
      </ul>
      <div className="navbar-right">
        <div className="SignUp">
          <a href="#" className="navbar-link">Online Payment</a>
          <a href="#" className="navbar-link-login active">Login</a>          
        </div>
        <div className="language-section">
          <select>
            <option value="uz">O'zbekcha</option>
            <option value="ru">Russian</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
