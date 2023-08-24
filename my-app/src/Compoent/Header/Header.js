import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="headermenu">
        <ul>
         <Link to="/">Home</Link>
         <Link to="/login">login</Link>

        </ul>
        </div>
    );
};

export default Header;