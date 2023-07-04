import { Container } from '@mui/material';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import './Work.css';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Works({ works }) {

  console.log(works)
  function createData(value1, value2, value3, value4, value5) {
    return { value1, value2, value3, value4, value5 };
  }

  const rows = works.map((w) => createData(w.id, w.work_date, w.display_title, w.by_irish, w.about_ireland));


  return (
    <Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                By Irish
              </TableCell>
              <TableCell align="right" style={{ width: 150 }}>
                About Ireland
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.value1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell component="th" scope="row">
                  <Link to={`/works/${row.value1}`}>
                    {row.value3}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  {row.value2}</TableCell>
                <TableCell align="right">
                  {row.value4 ? <IconButton color="success" aria-label="add to shopping cart">
                    <CheckIcon />
                  </IconButton> : <IconButton color="error" aria-label="add to shopping cart">
                    <CloseIcon />
                  </IconButton>}</TableCell>

                <TableCell align="right">
                  {row.value5 ? <IconButton color="success" aria-label="add to shopping cart">
                    <CheckIcon />
                  </IconButton> : <IconButton color="error" aria-label="add to shopping cart">
                    <CloseIcon />
                  </IconButton>}</TableCell>


              </TableRow>


            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {works.length == 0 && <div className='NoWorkLabel'>No works to show</div>}
    </Container>
  );
}
