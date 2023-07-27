import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BasicTable from './BasicTable';
import AddProduct from './AddProduct'
import '../styles/Menu.css';


const Menu = () => {
    const [showProduct, setShowProduct] = useState(false);
    
    const handleShowProduct = () => {
      setShowProduct(true);
    };

    const handleNoShowProduct = () =>{
        setShowProduct(false)
    }

    return (
        <div className="menu">
          <div className="menu-sup">
            <input className="menu-sup-search" placeholder="Buscar producto.." />
            <Button style={{ color: '#2C3E50' }} startIcon={<AddIcon />} onClick={handleShowProduct}>
              AGREGAR
            </Button>
          </div>
          {showProduct && <AddProduct handleNoShowProduct={handleNoShowProduct}/>}
          <BasicTable />
        </div>
      );
 };
    

export default Menu;