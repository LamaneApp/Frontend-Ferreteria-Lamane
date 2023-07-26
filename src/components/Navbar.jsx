import React from 'react'
import '../styles/Navbar.css';
import ConstructionIcon from '@mui/icons-material/Construction';

const Navbar = () => {
    return (
        <div className="navbar">
            <ConstructionIcon sx={{fontSize: 32, color: '#2C3E50'}} />
            <h1 className="navbar-title">LAMANE</h1>
        </div>
    )
}

export default Navbar;