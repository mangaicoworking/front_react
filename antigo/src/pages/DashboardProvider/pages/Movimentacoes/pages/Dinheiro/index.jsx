import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Money from './../../../../../../assets/icons/notes2.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
        '& img' :{
            width: "40px",
            paddingRight: "10px",
        }
  },
}));

export default function PageDinheiro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2} lg={2}>
            <Typography variant="button" display="block" gutterBottom>
                Saldo
            </Typography>
          <Paper className={classes.paper}>
              <img src={Money} alt='money' />
              R$ 2.492,69
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
