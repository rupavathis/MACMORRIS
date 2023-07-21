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



export default function Works({ works }) {

  console.log(works)
  function createData(value1, value2, value3) {
    return { value1, value2, value3 };
  }

  const rows1 = works[0].map((w) => createData(w.id, w.work_date, w.display_title));
  const rows2 = works[1].map((w) => createData(w.id, w.work_date, w.display_title));
  const rows3 = works[2].map((w) => createData(w.id, w.work_date, w.display_title));
  const rows4 = works[3].map((w) => createData(w.id, w.work_date, w.display_title));
  const rows5 = works[4].map((w) => createData(w.id, w.work_date, w.display_title));


  return (
    <Container>
      {works.every(arr => Array.isArray(arr) && arr.length === 0) ? <div className='NoWorkLabel'>No works to show</div> :
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} aria-label="simple table" size="small">

            <TableBody>
              {rows1.length != 0 &&
                <>
                  <div style={{ padding: '20px' }}>Author</div>
                  {rows1.map((row) => (
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
                    </TableRow>
                  ))}
                </>
              }


              {rows2.length != 0 &&
                <>
                  <div style={{ padding: '20px' }}>Patron</div>
                  {rows2.map((row) => (
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
                    </TableRow>
                  ))}
                </>
              }


              {rows3.length != 0 &&
                <>
                  <div style={{ padding: '20px' }}>Printer</div>
                  {rows3.map((row) => (
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
                    </TableRow>
                  ))}
                </>
              }


              {rows4.length != 0 &&
                <>
                  <div style={{ padding: '20px' }}>BookSeller</div>
                  {rows4.map((row) => (
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
                    </TableRow>
                  ))}
                </>
              }


              {rows5.length != 0 &&
                <>
                  <div style={{ padding: '20px' }}>Publisher</div>
                  {rows5.map((row) => (
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
                    </TableRow>
                  ))}
                </>
              }

            </TableBody>
          </Table>
        </TableContainer>
      }
    </Container>
  );
}
