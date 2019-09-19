import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },

  }),
);

export default function Pagar_e_Transferir() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Pagar_e_Transferir
    </div>
  );
}
