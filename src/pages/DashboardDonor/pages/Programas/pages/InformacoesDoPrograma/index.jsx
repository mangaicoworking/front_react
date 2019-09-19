import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import regras from './../../../../../../assets/icons/regras.png';
import edit from './../../../../../../assets/icons/edit.png';

import UltimosCadastros from './components/UltimosCadastros/index';
import BeneficiosDoPrograma from './components/BeneficiosDoPrograma/index';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 'fit-content',
    display: 'block',
    margin: '0px auto 20px',
  },
  containerInformacoesPrograma:{
    display: 'flex',
  },
  informacoesProgramaImagem:{
    width: "max-content",
    alignItems: 'center',
    display: 'flex',
    '& img':{
      width: "80px",
      height: "auto",
    }
  },
  informacoesPrograma:{
    paddingLeft: '20px',
    '& h5':{
      color: '#990405',
      padding: '0px',
      margin: '0px',
    },
    '& span':{
      color: '#990405',
    },
    '& p':{
      padding: '0px',
      margin: '0px',
    }
  },
  containerUltimosCadastros: {
    marginTop: '40px',
  },
  button: {
    backgroundColor: '#990405',
    color: '#fff',
    display: 'block',
    margin: '0px auto',
    marginTop: '40px',
  },
  button2: {
    backgroundColor: '#990405',
    color: '#fff',
    display: 'block',
    margin: '0px auto',
  },
  tamanho50:{
    width: "50%",
    padding: '0px 10px',
  },
  containerButtonsAlterarParametros:{
    display: 'flex',
    '& img':{
      width: '60px',
    }
  }
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={5}>
          <div className={classes.containerInformacoesPrograma}>
            <div className={classes.informacoesProgramaImagem}>
              <img src={props.imagemDoPrograma} alt='icon' />
            </div>
            <div className={classes.informacoesPrograma}>
              <Typography variant="h5" display="block" gutterBottom>
                {props.nomeDoPrograma}
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Beneficiarios no programa: <span>{props.beneficiariosNoPrograma}</span>
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Atividades Desenvolvidas: <span>{props.atividadesDesenvolvidas}</span>
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Investimentos no programa: <span>{props.investimentoNoPrograma}</span>
              </Typography>
            </div>
          </div>
          <div className={classes.containerUltimosCadastros}>
            <Typography variant="button" display="block" gutterBottom>
              Últimos cadastros
            </Typography>
            <UltimosCadastros />
          </div>
          <div>
            <Button variant="contained" color="inherit" className={classes.button}>
              Vincular beneficiário ao programa
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={7} md={7} lg={7}>
          <div className={classes.containerButtonsAlterarParametros}>
            <div className={classes.tamanho50}>
              <Paper className={classes.paper2}>
                <img src={edit} alt='icon' />
                <Typography variant="button" display="block" gutterBottom>
                  Dados do Programa
                </Typography>
                <Button variant="contained" size='small' color="inherit" className={classes.button2}>
                  Editar
                </Button>
              </Paper>
            </div>
            <div className={classes.tamanho50}>
              <Paper className={classes.paper2}>
                <img src={regras} alt='icon' />
                <Typography variant="button" display="block" gutterBottom>
                  Regras do Programa
                </Typography>
                <Button variant="contained" size='small' color="inherit" className={classes.button2}>
                  Editar
                </Button>
              </Paper>
            </div>
          </div>
          
          <Typography variant="button" display="block" gutterBottom>
            Beneficios do Programa
          </Typography>
          <BeneficiosDoPrograma />
        </Grid>

      </Grid>
    </div>
  );
}
