import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Posts</Link>
      <Link to='/form'>Form</Link>
    </nav>
  );
};

export default Navbar;
