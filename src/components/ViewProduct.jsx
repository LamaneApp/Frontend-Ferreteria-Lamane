import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ViewProduct({handleShowViewProduct}) {
  return (
    <Box
    component="form"
    sx={{
      position: 'fixed',
      backgroundColor: 'white',
      border: '1px solid grey',
      borderRadius: '10px',
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '150px',
      paddingRight: '150px',
      top: '50%', // Centrar verticalmente
      left: '50%', // Centrar horizontalmente
      transform: 'translate(-50%, -50%)', // Ajustar centrado
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: '12px'
    }}
    noValidate
    autoComplete="off"
  >
    <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>
            <p style={{fontWeight: 'bold'}}>Codigo</p>
            <p>001020A0</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold'}}>Proveedor</p>
            <p>Dafys</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold'}}>Nombre</p>
            <p>Acero</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold'}}>Stock</p>
            <p>250</p>
          </div>
          <div>
            <p style={{fontWeight: 'bold'}}>Precio</p>
            <p>2500</p>
          </div>
    </div>
    <div style={{marginTop: '32px'}}>
        <Button style={{color: '#2C3E50'}} onClick={() =>handleShowViewProduct(null)}>
                VOLVER
        </Button>
    </div>
    </Box>
  );
}
