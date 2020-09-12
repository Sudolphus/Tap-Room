import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogoSmall from './img/LogoSmall.png';
import './css/Navigator.css';

function Navigator(props) {
  const onLinkClick = props.onLinkClick;
  
  return (
    <Navbar className="mb-3 custom-nav">
      <Navbar.Brand><img src={LogoSmall} alt='taphouse logo' className="brand-img" /></Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link className="custom-link" onClick={()=>onLinkClick('index')}>Main</Nav.Link>
        <Nav.Link className="custom-link" onClick={()=>onLinkClick('create')}>Add</Nav.Link>
      </Nav>
    </Navbar>
  )
}

Navigator.propTypes = {
  onLinkClick: PropTypes.func.isRequired
}

export default Navigator;