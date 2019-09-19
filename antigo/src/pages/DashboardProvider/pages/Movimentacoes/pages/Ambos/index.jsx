import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import UltimosRecebimentosDinheiro from './Components/UltimosRecebimentosDinheiro/index';
import UltimosRecebimentosMes from './Components/UltimosRecebimentosMes/index';
import VendasMesNoPeriodo from './Components/VendasMesNoPeriodo/index';

import Money from './../../../../../../assets/icons/notes2.png';
import Coin from './../../../../../../assets/icons/coin2.png';
import Extrato from './../../../../../../assets/icons/statement.png';
import Clientes from './../../../../../../assets/icons/customer.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '95%',
    display: 'block',
    margin: '0px auto',
        '& img' :{
            width: "40px",
            paddingRight: "10px",
        }
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '95%',
    display: 'block',
    margin: '0px auto',
        '& img' :{
            width: "50px",
            paddingRight: "10px",
            display: 'block',
            margin: "0px auto",
        }
  },
  tamanho50:{
    width: "50%",
    display: "-webkit-inline-box",
  },
  tamanho100:{
    width: "100%",
    display: "-webkit-inline-box",
  },
  title: {
    marginTop: "25px",
  },
  titleRed:{
    color: '#990405',
  },
  button: {
    backgroundColor: '#990405',
    color: "#fff",
  }
}));

export default function PageDinheiro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <div>
            <Typography variant="button" display="block" gutterBottom>
              Saldo
            </Typography>
          </div>
          <div className={classes.tamanho50}>
            <Paper className={classes.paper}>
                <img src={Money} alt='money' />
                R$ 3.281,30
            </Paper>
          </div>
          <div className={classes.tamanho50}>
            <Paper className={classes.paper}>
                <img src={Coin} alt='money' />
                1.787
            </Paper>
          </div>
          <div>
            <Typography variant="button" display="block" gutterBottom className={classes.title}>
              Últimos Recebimentos (R$)
            </Typography>
          </div>
          <div className={classes.tamanho100}>
            <UltimosRecebimentosDinheiro />
          </div>
          <div>
            <Typography variant="button" display="block" gutterBottom className={classes.title}>
              Últimos Recebimentos (Me's)
            </Typography>
          </div>
          <div className={classes.tamanho100}>
            <UltimosRecebimentosMes />
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="button" display="block" gutterBottom>
             Vendas ME’s por produtos/serviços
            </Typography>
          </div>
          <div className={classes.tamanho100}>
            <VendasMesNoPeriodo />
          </div>
          <div className={classes.tamanho50}>
            <Paper className={classes.paper2}>
                <img src={Extrato} alt='money' />
                <Typography variant="subtitle1" display="block" gutterBottom className={classes.titleRed}>
                  Extrato da conta
                </Typography>
                <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum vitae urna id suscipit. Sed vel arcu vitae sem iaculis auctor.
                </Typography>
                <Button variant="contained" className={classes.button}>
                  Acessar
                </Button>
            </Paper>
          </div>
          <div className={classes.tamanho50}>
            <Paper className={classes.paper2}>
                <img src={Clientes} alt='money' />
                <Typography variant="subtitle1" display="block" gutterBottom className={classes.titleRed}>
                  Clientes
                </Typography>
                <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum vitae urna id suscipit. Sed vel arcu vitae sem iaculis auctor.
                </Typography>
                <Button variant="contained" className={classes.button}>
                  Acessar
                </Button>
            </Paper>
          </div> 
        </Grid>

      </Grid>
    </div>
  );
}
