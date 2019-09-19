import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import add from './../../../../../../../../assets/icons/plus3.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
    height: 240,
    textAlign: 'center',
    margin: '0px auto',
    alignItems: 'center',
    display: 'grid',
    '& img':{
        width: '40%',
        display: 'block',
        margin: '0px auto',
    },
    '& h6':{
        color: '#990405',
        margin: '0px',
        textTransform: 'uppercase'
    }
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <img src={add} alt='icon' />
        <Typography variant="h6" gutterBottom>
            Novo Produto
        </Typography>
    </Card>
  );
}
