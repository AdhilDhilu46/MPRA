import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => navigate('/home')} className="nav-button">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/todo')} className="nav-button">
            Todo
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/countries')} className="nav-button">
            Countries
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
