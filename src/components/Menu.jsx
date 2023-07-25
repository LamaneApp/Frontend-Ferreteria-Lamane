import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BasicTable from './BasicTable';
import '../styles/Menu.css';


const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-sup">
                <h1 className="menu-sup-title">Productos</h1>
                <input className="menu-sup-search" placeholder='Buscar producto..'></input>
                <Button className="menu-sup-bottom-add" startIcon={<AddIcon/>}>
                    AGREGAR
                </Button>
            </div>
            <BasicTable></BasicTable>
        </div>
    )
}

export default Menu;
