import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 'auto',
    textAlign: 'center',
    '& .MuiTableCell-sizeSmall':{
        textAlign: 'center',
    }
  },
}));

function createData(beneficio, ofertadas, consumidos, falta) {
  return { beneficio, ofertadas, consumidos, falta };
}

const rows = [
  createData('Beneficio1', '180', '110', '70'),
  createData('Beneficio2', '188', '180', '8'),
  createData('Beneficio3', '402', '202', '200'),
  createData('Beneficio4', '501', '142', '359'),
  createData('Beneficio5', '872', '241', '643'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Beneficio</TableCell>
              <TableCell>Ofertadas</TableCell>
              <TableCell>Consumidos</TableCell>
              <TableCell>Restante</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.beneficio}>
                <TableCell component="th" scope="row">
                  {row.beneficio}
                </TableCell>
                <TableCell>{row.ofertadas}</TableCell>
                <TableCell>{row.consumidos}</TableCell>
                <TableCell>{row.falta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
