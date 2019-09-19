import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CardAddProduto from './components/CardAddProduto/index';
import CardProduto from './components/CardProduto/index';

import Produto1 from './../../../../../../assets/images/produto1.jpg';
import Produto2 from './../../../../../../assets/images/produto2.jpg';
import Produto3 from './../../../../../../assets/images/produto3.jpg';
import Produto4 from './../../../../../../assets/images/produto4.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <CardAddProduto />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <CardProduto 
            imagemProduto={Produto1}
            nome='Leite'
            valor='R$ 6,00'
            descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis ex, dignissim eu ligula ac, ornare sagittis mi. Nulla facilisi. Ut pellentesque semper nisl, in congue tellus tempor at. '
            ncm='0306.39.90'
            grupo='tags'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <CardProduto 
            imagemProduto={Produto2}
            nome='Remédios'
            valor='R$ 27,00'
            descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis ex, dignissim eu ligula ac, ornare sagittis mi. Nulla facilisi. Ut pellentesque semper nisl, in congue tellus tempor at. '
            ncm='0306.39.90'
            grupo='tags'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <CardProduto 
            imagemProduto={Produto3}
            nome='Colheitas'
            valor='R$ 8,00'
            descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis ex, dignissim eu ligula ac, ornare sagittis mi. Nulla facilisi. Ut pellentesque semper nisl, in congue tellus tempor at. '
            ncm='0306.39.90'
            grupo='tags'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <CardProduto 
            imagemProduto={Produto4}
            nome='Celular'
            valor='R$ 699,00'
            descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis ex, dignissim eu ligula ac, ornare sagittis mi. Nulla facilisi. Ut pellentesque semper nisl, in congue tellus tempor at. '
            ncm='0306.39.90'
            grupo='tags'
          />
        </Grid>

      </Grid>
    </div>
  );
}
