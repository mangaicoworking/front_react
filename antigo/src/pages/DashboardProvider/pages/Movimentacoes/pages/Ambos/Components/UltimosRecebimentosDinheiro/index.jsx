import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 'auto',
    '& .MuiTableCell-root':{
        padding: '14px 10px 14px 16px',
        textAlign: 'center',
    }
  },
}));


function createRow(beneficiario, data, valor, saldo) {
  return { beneficiario, data, valor, saldo };
}

const rows = [
  createRow('507f1f77bc', '03/08/2019', '80.80', '3.281,30'),
  createRow('557f1f77bc', '31/07/2019', '112', '3.200,50‬'),
  createRow('577f1f77bc', '28/07/2019', '76.50', '3.124'),
];

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Beneficiário</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Saldo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.beneficiario}>
              <TableCell>{row.beneficiario}</TableCell>
              <TableCell align="right">{row.data}</TableCell>
              <TableCell align="right">{row.valor}</TableCell>
              <TableCell align="right">{row.saldo}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={1} align="right">Total</TableCell>
            <TableCell align="right">R$269,30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
