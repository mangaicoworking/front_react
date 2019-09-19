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

function createData(beneficiario, data) {
  return { beneficiario, data };
}

const rows = [
  createData('15%1$*124', '01/08/2019'),
  createData('15%1$*114', '28/07/2019'),
  createData('25%1#*124', '25/07/2019'),
  createData('15%1$*428', '24/07/2019'),
  createData('15%1$*1&1', '23/07/2019'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Beneficiário</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.beneficiario}>
                <TableCell component="th" scope="row">
                  {row.beneficiario}
                </TableCell>
                <TableCell>{row.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
