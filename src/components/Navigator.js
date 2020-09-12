import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoSmall from './img/LogoSmall.png';
import './css/Navigator.css';

function Navigator(props) {
  const onLinkClick = props.onLinkClick;
  const whiteLink = {
    color: "white"
  }
  return (
    <Navbar className="mb-3 custom-nav">
      <Navbar.Brand><img src={LogoSmall} alt='taphouse logo' className="brand-img" /></Navbar.Brand>
      <NavDropdown title='Some Handy Links' id='basic-nav-dropdown' className='mr-auto float-left custom-link' style={whiteLink}>
        <NavDropdown.Item onClick={()=>onLinkClick('index')}>Main List</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>onLinkClick('create')}>Add a Beer</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  )
}

Navigator.propTypes = {
  onLinkClick: PropTypes.func.isRequired
}

export default Navigator;