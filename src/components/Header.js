import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from './img/Logo.png';

function Header() {
  return (
    <Image src={logo} className='mx-auto d-block' />
  )
}

export default Header;