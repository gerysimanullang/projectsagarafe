import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Components/img/ya.jpeg';
import profilePicture from '../Components/img/iy.jpeg';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Roboto Slab, sans-serif',
  };

  const logoStyle = {
    width: '250px',
  };

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Move links to the right
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 15px',
  };

  const searchContainerStyle = {
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #000',
    borderRadius: '100px',
    padding: '1px',
  };

  const searchInputContainerStyle = {
    position: 'relative',
  };

  const searchIconStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    color: '#ccc',
    cursor: 'pointer',
  };

  const searchInputStyle = {
    padding: '15px 15px 20px 30px',
    border: 'none',
    borderRadius: '200px',
    width: '200px',
    outline: 'none',
  };

  const profileContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const profileImgStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/certifications" style={linkStyle}>Certification History</Link>
        <Link to="/faq" style={linkStyle}>FAQ</Link>
        <div style={searchContainerStyle}>
          <div style={searchInputContainerStyle}>
            <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
            <input type="text" placeholder="Search" style={searchInputStyle} />
          </div>
        </div>
      </div>
      <div style={profileContainerStyle}>
        <Link to="/profile">
          <img src={profilePicture} alt="Profile" style={profileImgStyle} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
