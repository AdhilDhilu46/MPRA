import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/countries">Countries</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
