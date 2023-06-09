import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header
      data-testid="navbar"
      style={{ display: 'flex', gap: '16px', padding: '16px' }}
    >
      <Link to="/" data-testid="main-link">
        Main
      </Link>
      <Link to="/about" data-testid="about-link">
        About
      </Link>
      <Link to="/users" data-testid="users-link">
        Users
      </Link>
      <Link to="/users-test" data-testid="users-link">
        Users e2e test
      </Link>
      <Link to="/e2e" data-testid="e2e-test">
        e2e tests
      </Link>
    </header>
  );
};

export default Navbar;
