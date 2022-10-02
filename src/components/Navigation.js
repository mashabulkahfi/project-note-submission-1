import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
 
function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/archive">Arsip</Link></li>
        <li><button type="button" className="button-logout" onClick={logout}><FiLogOut/>{name}</button></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;