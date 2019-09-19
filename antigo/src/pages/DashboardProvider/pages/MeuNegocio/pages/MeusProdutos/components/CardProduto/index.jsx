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

import Image from './../../../../../../../../assets/images/produto1.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
    display: 'block',
    margin: '0px auto',
    '& .MuiCardHeader-title':{
      fontSize: '12pt',
    },
    '& .MuiCardHeader-subheader':{
      fontSize: '10pt',
    },
    '& .MuiCardHeader-root':{
      padding: '10px 10px 2px 10px',
    },
    '& svg':{
      color: '#990405',
    }
  },
  buttonOptions:{
    padding: '5px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    display: 'inline-table',
    width: '100%',
    '& button':{
      backgroundColor: "#fff",
      color: "#303030",
      borderRadius: '0px',
      '&:hover':{
        backgroundColor: "#fff",
        color: "#303030",
        borderRadius: '0px',
      }
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton className={classes.buttonOptions} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.nome}
        subheader={props.valor}
      />
      <CardMedia
        className={classes.media}
        image={props.imagemProduto}
        title="Paella dish"
      >
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardMedia>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
