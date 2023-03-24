import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from 'react-bootstrap/Badge';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function Roles({ roles }) {

  return (
    <Container>
      <Stack direction="row" spacing={1} justifyContent={"center"}>
        {[...new Set(roles)].map((role) =>
          <Chip label={role} />
        )}
      </Stack>
    </Container>
  );
}
