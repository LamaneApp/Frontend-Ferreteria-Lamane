import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const rows = [
  ['AA00', 'Dafys', "Tornillo 13mm", "200", "2500"],
  ['AA00', 'Dafys', "Tornillo 13mm", "200", "2500"],
  ['AA00', 'Dafys', "Tornillo 13mm", "200", "2500"],
  ['AA00', 'Dafys', "Tornillo 13mm", "200", "2500"],
];

export default function BasicTable() {
  return (
    <div style={{marginBottom: '0px'}}>
      <TableContainer style={{backgroundColor: '#E9E9F1'}} component={Paper}>
        <Table aria-label="simple table" style={{ width: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: 'bold'}}>Codigo</TableCell>
              <TableCell style={{fontWeight: 'bold'}}>Proveedor</TableCell>
              <TableCell style={{fontWeight: 'bold'}}>Nombre</TableCell>
              <TableCell style={{fontWeight: 'bold'}}>Stock</TableCell>
              <TableCell style={{fontWeight: 'bold'}}>Precio</TableCell>
              <TableCell style={{ paddingRight: '10px' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row[0]}>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
                <TableCell>{row[3]}</TableCell>
                <TableCell>{row[4]}</TableCell>
                <TableCell style={{ paddingRight: '10px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="contained" size="small" style={{backgroundColor: '#6262B4'}}>
                      VER
                    </Button>
                    <IconButton aria-label="delete" size="small">
                     <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small" color="error">
                     <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
