import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BasicTable from './BasicTable';
import '../styles/Menu.css';


const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-sup">
                <input className="menu-sup-search" placeholder='Buscar producto..'></input>
                <Button style={{color: '#2C3E50'}} startIcon={<AddIcon/>}>
                    AGREGAR
                </Button>
            </div>
            <BasicTable></BasicTable>
        </div>
    )
}

export default Menu;
