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

function createData(produtoServico, vendasPeriodo) {
  return { produtoServico, vendasPeriodo };
}

const rows = [
  createData('Produto1', '12'),
  createData('Serviço1', '21'),
  createData('Serviço2', '18'),
  createData('Produto2', '2'),
  createData('Serviço3', '10'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Produto/Serviço</TableCell>
              <TableCell>Vendas No Período</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.produtoServico}>
                <TableCell component="th" scope="row">
                  {row.produtoServico}
                </TableCell>
                <TableCell>{row.vendasPeriodo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
