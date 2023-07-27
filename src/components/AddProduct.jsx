import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddProduct({ handleNoShowProduct }) {
  return (
    <Box
    component="form"
     sx={{
        //position: 'fixed',
        //top: '240px',
        backgroundColor: 'white',
        border: '1px solid grey',
        borderRadius: '10px',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginBottom: '60px',
        //zIndex: 9999,
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    noValidate
    autoComplete="off"
  >
    <h1 style={{color: '#2C3E50'}}>Ingresar producto</h1>
    <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{display:'flex', flexDirection:'column', paddingRight: '32px'}}>
        <TextField id="outlined-basic" label="Codigo" variant="outlined" />
        <TextField id="outlined-basic" label="Proveedor" variant="outlined" />
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        </div>
        <div style={{display:'flex', flexDirection:'column', paddingLeft: '32px'}}>
        <TextField id="outlined-basic" label="Stock" variant="outlined" />
        <TextField id="outlined-basic" label="Precio" variant="outlined" />
        </div>
    </div>
    <div style={{marginTop: '32px'}}>
        <Button style={{color: '#2C3E50'}} onClick={handleNoShowProduct}>
                VOLVER
        </Button>
        <Button style={{marginLeft: '64px', color: '#2C3E50'}}>
                AGREGAR
        </Button>
    </div>
    </Box>
  );
}
