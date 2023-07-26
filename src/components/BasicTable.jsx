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
import Pagination from '@mui/material/Pagination';

// Array de datos
const rows = [
  ['AA00', 'Dafys', "Acero", "200", "2500"],
  ['AA00', 'Dafys', "Acero", "3000", "2500"],
  ['AA00', 'Dafys', "Acero", "250", "12500"],
  ['AA00', 'Dafys', "Alambre", "200", "2500"],
  ['AA00', 'Dafys', "Alambre", "200", "2500"],
  ['AA00', 'Dafys', "Alambre", "200", "2500"],
  ['AA00', 'Dafys', "Alambre", "200", "2500"],
  ['AA00', 'Dafys', "Alambre", "200", "2500"],
];

const itemsPerPage = 5; // Cantidad de elementos por página

export default function BasicTable() {
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageRows = rows.slice(startIndex, endIndex);

  return (
    <div style={{ marginBottom: '0px', display:'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center' }}>
      <TableContainer style={{ backgroundColor: '#E9E9F1', width: 'auto', height: 'auto' }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Codigo</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Proveedor</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Stock</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Precio</TableCell>
              <TableCell style={{ paddingRight: '10px' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
                <TableCell>{row[3]}</TableCell>
                <TableCell>{row[4]}</TableCell>
                <TableCell style={{ paddingRight: '10px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="contained" size="small" style={{ backgroundColor: '#2C3E50' }}>
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
      <div style={{marginTop: '20px'}}>
      <Pagination
        count={Math.ceil(rows.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        variant="outlined"
        color="primary"
        />
      </div>
    </div>
  );
}
